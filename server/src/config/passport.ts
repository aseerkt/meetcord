import { PassportStatic, Profile } from 'passport';
import { Strategy as GithubStrategy } from 'passport-github2';
import { SERVER_URL } from './constants';
import prisma from './prisma';

export default function configPassport(passport: PassportStatic) {
  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        callbackURL: `${SERVER_URL}/auth/github/callback`,
        scope: ['user:email'],
      },
      async function (_: any, __: any, profile: Profile, done: Function) {
        try {
          const user = await prisma.user.upsert({
            create: {
              username: profile.username!,
              providerId: profile.id,
              avatar: profile.photos![0].value,
              displayName: profile.displayName,
              email: profile.emails![0].value,
            },
            update: {},
            where: {
              providerId: profile.id,
            },
          });
          done(null, user);
        } catch (err) {
          done(err, false, { message: 'Something went wrong' });
        }
      },
    ),
  );

  passport.serializeUser(function (user: any, done) {
    done(null, user.providerId);
  });

  passport.deserializeUser(async function (id: string, done) {
    try {
      const user = await prisma.user.findUnique({ where: { providerId: id } });
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  });
}
