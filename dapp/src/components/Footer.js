import { fbt } from 'fbt-runtime'
import Link from 'next/link'

import EmailForm from './EmailForm'

const docsURL = process.env.DOCS_URL
const termsURL = process.env.TERMS_URL
const privacyURL = process.env.PRIVACY_URL
const discordURL = process.env.DISCORD_URL
const telegramURL = process.env.TELEGRAM_URL
const wechatURL = process.env.WECHAT_URL
const githubURL = process.env.GITHUB_URL
const redditURL = process.env.REDDIT_URL
const weiboURL = process.env.WEIBO_URL
const facebookURL = process.env.FACEBOOK_URL
const twitterURL = process.env.TWITTER_URL
const mediumURL = process.env.MEDIUM_URL
const youtubeURL = process.env.YOUTUBE_URL
const instagramURL = process.env.INSTAGRAM_URL

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 pr-lg-5 mb-5 mb-lg-0">
              <h5>{fbt('Mailing List', 'Mailing List')}</h5>
              <p>{fbt('Sign up to stay in touch. Your email will be kept private.', 'Sign up to stay in touch. Your email will be kept private.')}</p>
              <EmailForm footer />
            </div>
            <div className="col-12 col-lg-6">
              <nav className="nav d-flex">
                <Link href="/">
                  <a className="nav-link">
                    {fbt('Home', 'Home page link')}
                  </a>
                </Link>
                <Link href="/earn">
                  <a className="nav-link">
                    {fbt('Earn Yields', 'Earn page link')}
                  </a>
                </Link>
                <Link href="/governance">
                  <a className="nav-link">
                    {fbt('Governance', 'Governance page link')}
                  </a>
                </Link>
                <a
                  href={docsURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  {fbt('Docs', 'Documentation link')}
                </a>
              </nav>
              <div className="social-icons">
                <a
                  href={discordURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/discord.svg" alt="Discord logo" />
                </a>
                <a
                  href={telegramURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/telegram.svg" alt="Telegram logo" />
                </a>
                <a
                  href={wechatURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/wechat.svg" alt="WeChat logo" />
                </a>
                <a
                  href={githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/github.svg" alt="GitHub logo" />
                </a>
                <a
                  href={redditURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/reddit.svg" alt="Reddit logo" />
                </a>
                <a
                  href={weiboURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/weibo.svg" alt="Weibo logo" />
                </a>
                <a
                  href={facebookURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/facebook.svg" alt="Facebook logo" />
                </a>
                <a
                  href={twitterURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/twitter.svg" alt="Twitter logo" />
                </a>
                <a
                  href={mediumURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/medium.svg" alt="Medium logo" />
                </a>
                <a
                  href={youtubeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/youtube.svg" alt="YouTube logo" />
                </a>
                <a
                  href={instagramURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/instagram.svg" alt="Instagram logo" />
                </a>
              </div>
              <div className="legal">
                Copyright &copy; {new Date().getFullYear()} Origin Protocol Inc. All rights reserved.
                <nav className="nav d-flex">
                  <a
                    href={termsURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    {fbt('Terms of Service', 'Terms of Service')}
                  </a>
                  <a
                    href={privacyURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    {fbt('Privacy Policy', 'Privacy Policy')}
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background-color: #061d2a;
          padding: 150px 0;
        }

        h5 {
          color: white;
          font-size: 1.125rem;
          font-weight: bold;
        }

        p {
          color: #bdcbd5;
          font-size: 1.125rem;
        }

        a,
        .legal {
          color: white;
          font-size: 0.875rem;
        }

        a:hover {
          cursor: pointer;
          opacity: 0.8;
        }

        .nav-link {
          padding: 0;
        }

        .nav-link:not(:last-of-type) {
          padding-right: 32px;
        }

        .social-icons {
          margin: 20px 0 15px;
        }

        .social-icons a img {
          margin-bottom: 15px;
        }

        .social-icons a:not(:last-of-type) img {
          margin-right: 15px;
        }

        .legal,
        .legal .nav-link {
          color: #bdcbd5;
          line-height: 2;
        }

        @media (max-width: 992px) {

        }
      `}</style>
    </>
  )
}