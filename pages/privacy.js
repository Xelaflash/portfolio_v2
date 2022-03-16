import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../components/Logo';
import SectionTitle from '../components/SectionTitle';
import { LogoWrapper, Subtitle } from '../styles/regulatory';

export default function Privacy() {
  return (
    <PrivacyWrapper>
      <Head>
        <title>Alex G | Web Developer - Privacy</title>
      </Head>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <PrivacyPageWrapper>
        <SectionTitle
          title="Privacy Policy / Politique de confidentialité"
          margin="2rem auto 4rem auto;"
        />
        <a href="#fr" style={{ color: 'var(--text-dimmed)' }}>
          🇫🇷 Voir la version Fr
        </a>
        <div id="en">
          <SubSection>
            <Subtitle>Privacy Policy</Subtitle>
            <SubSectionTitle>Definitions</SubSectionTitle>
            <p>
              <b>Client&nbsp;:</b>&nbsp; any professional or individual able to
              sense the 1123 and following of the Civil Code or legal person,
              who visits the Site object of these terms.
              <br />
              <b>Benefits and Services&nbsp;:</b>{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              provides reviews:&nbsp;
            </p>

            <p>
              <b>Content&nbsp;:</b>&nbsp;Set of constituents the information
              contained on the website, including texts - pictures - videos.
            </p>

            <p>
              <b>Customer Information&nbsp;:</b> Hereinafter referred to as
              "information (s)" that correspond to all the personal data that
              can be held by{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              to manage your account, the customer relationship management and
              for analysis and statistics.
            </p>

            <p>
              <b>User:</b> Internet connecting, using the aforementioned site.
            </p>
            <p>
              <b>Personal information:</b> « information that helps in any form
              whatsoever, directly or indirectly, the identification of
              individuals to which they apply" (Article 4 of Law No. 78-17 of 6
              January 1978).
            </p>
            <p>
              The terms "personal data", "data subject", "subcontractor" and
              "sensitive data" have the meanings defined by the General
              Regulation on Data Protection (RGPD: No. 2016-679)
            </p>
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              1. Presentation of the website.
            </SubSectionTitle>
            <p>
              <Link href="/legal" target="_blank" rel="noopener noreferrer">
                See legal notice
              </Link>
            </p>
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              2. Terms of Use and the services offered.
            </SubSectionTitle>
            <p>
              The Site constitutes a work of authorship protected by the
              provisions of the Code of Intellectual Property and International
              regulations apply. Customer may not in any way re-use, sell or
              exploit for its own account or all of the elements or works of the
              Site.
            </p>
            <p>
              Use of the site{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              implies full acceptance of the general conditions described below
              using. These terms of use may be modified at any time, users of
              the site{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              are advised to consult them regularly.
            </p>
            <p>
              This web site is normally accessible at all times to users.
              Interruption due to technical maintenance can be however decided
              by{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              , who will then endeavor to communicate to users before the date
              and time of the intervention.
            </p>
            <p>
              The website{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              is updated regularly by{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              responsible. Similarly, the disclaimer may be modified at any
              time: they are needed, however the user is encouraged to refer to
              it as often as possible to see it.
            </p>
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              3. Description of services provided.
            </SubSectionTitle>
            <p>
              The website{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              is to provide information on all the company's activities.{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              strives to provide the site{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              as accurate information as possible. However, it can not be held
              responsible for omissions, inaccuracies and deficiencies in the
              update, whether by him or due to third party partners that provide
              this information.
            </p>
            <p>
              All information listed on the site{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              are indicative only and are subject to change. Furthermore, the
              information on the site{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              are not exhaustive. They are given subject to changes being made
              since they are online.
            </p>
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              4. Contractual limitations on the technical data.
            </SubSectionTitle>
            <p>The site uses JavaScript technology.</p>
            <p>
              The website can not be held responsible for damage related to the
              use of the site. In addition, the site user agrees to access the
              site using the latest equipment, not containing virus and with a
              recent browser up-to-date.
            </p>
            <p>
              The objective is to provide a service that ensures the best
              accessibility rates. The web host provides continuity of service
              24 hours on 24, every day of the year. It nevertheless reserves
              the right to interrupt the hosting service for the shortest
              possible duration including maintenance, enhancement of
              infrastructure, failure of infrastructure or the Benefits and
              Services generate a reputable traffic unnatural.
            </p>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              and the host will not be held responsible for any malfunction of
              the Internet, telephone lines or hardware and telephony related in
              particular to prevent network congestion server access.
            </p>
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              5. Intellectual property and counterfeiting.
            </SubSectionTitle>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              owns the intellectual property rights and holds the rights to use
              all the items available on the website, including text, images,
              graphics, logos, videos, icons and sounds. Any reproduction,
              modification, publication, adaptation of all or some elements of
              the site, regardless of the means or process, is prohibited
              without prior written permission of:{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              .
            </p>
            <p>
              Any unauthorized use of the site or any of its materials will be
              deemed to constitute an infringement and prosecuted in accordance
              with Articles L.335-2 and following of the Intellectual Property
              Code.
            </p>
          </SubSection>
          <subSection>
            <SubSectionTitle className="sub-title">
              6. Limitations of Liability.
            </SubSectionTitle>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              acts as publisher of the site.{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              is responsible for the quality and veracity of the contents it
              publishes.
            </p>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              not be held liable for direct and indirect damage to the equipment
              user, when accessing the website{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              , and resulting from the use of a material not meeting
              specifications of section 4 or the appearance of a bug or
              incompatibility.
            </p>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              can't also be held liable for consequential damages (including for
              example a loss of market or loss of opportunity) arising from use
              of the site{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              .
            </p>
            <p>
              Interactive spaces (opportunity to ask questions in the space
              contact) are available to users.{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              reserves the right to remove, without prior notice, any content
              posted in this space that would violate the law applicable in
              France, particularly the provisions on data protection. If
              necessary,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              also reserves the option to challenge the civil and / or criminal
              user, especially in cases of post racist, offensive, defamatory,
              or pornographic, whatever the medium (text, photography ...).
            </p>
          </subSection>
          <subSection>
            <SubSectionTitle className="sub-title">
              7. Management of personal data.
            </SubSectionTitle>
            <p>
              The Customer is informed of regulations concerning marketing
              communications, the Act of 21 June 2014 on Confidence in the
              Digital Economy, the Data Protection Act of 6 August 2004 and the
              General Regulation on Data Protection (RGPD: No. 2016-679).
            </p>

            <SubSectionSubTitle>
              7.1 heads of the collection of personal data
            </SubSectionSubTitle>
            <p>
              For Personal Data collected as part of contact space and browsing
              the Site, the head of the Personal Data processing is:{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              represented by Alexandre Gros, legal representative
            </p>
            <p>
              As controller of the data it collects,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              agrees to comply with the statutory provisions. In particular it
              belongs to the Customer to establish the aims of its data
              processing, to provide its customers and prospects, from
              collecting their consents, comprehensive information on the
              processing of their personal data and to maintain a register of
              treatment consistent with reality.{' '}
            </p>
            <p>
              Whenever{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              deals with personal data,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              take all reasonable steps to ensure the accuracy and relevance of
              personal data to the purpose for which{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              treats.
            </p>

            <SubSectionSubTitle>
              7.2 Purpose of the data collected
            </SubSectionSubTitle>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              is capable of treating all or part of data:
            </p>
            <ul>
              <li>
                for navigation on the site and the management and traceability
                of benefits and services ordered by the user: login information
                and use of the Site, invoicing, order history, etc.
              </li>
              <li>
                to prevent and fight against computer fraud (spamming, hacking
                ...) computer equipment used for navigation, the IP address,
                password (hashed)
              </li>
              <li>
                to improve the navigation of the site: login information and use
              </li>
              <li>
                to conduct satisfaction surveys on optional{' '}
                <a href="https://www.alexgwebdev.com">
                  https://www.alexgwebdev.com
                </a>{' '}
                : email address
              </li>
              <li>
                to conduct communication campaigns (SMS, email): phone number,
                email address
              </li>
            </ul>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              does not sell your personal data are therefore used only by
              necessity or for statistical purposes and analysis.
            </p>

            <SubSectionSubTitle>
              7.3 Right of access, rectification and opposition
            </SubSectionSubTitle>
            <p>
              In accordance with European regulations, the users{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              have the following rights:
            </p>
            <ul>
              <li>
                right of access (Article 15 RGPD) and rectification (article 16
                RGPD), updating, completeness of data lock right users or data
                erasure of personal users (Article 17 of RGPD) if inaccurate,
                incomplete, misleading, outdated or whose collection, use,
                disclosure or storage is prohibited
              </li>
              <li>right to withdraw consent at any time (Rule 13-2c RGPD)</li>
              <li>
                right to limitation of data processing Users (Article 18 RGPD)
              </li>
              <li>
                right to object to data processing of users (Article 21 RGPD)
              </li>
              <li>
                right to data portability Users have provided, when these data
                are processed automatically based on consent or on a contract
                (Article 20 RGPD)
              </li>
              <li>
                right to determine the fate of User data after their death and
                to choose who{' '}
                <a href="https://www.alexgwebdev.com">
                  https://www.alexgwebdev.com
                </a>{' '}
                will communicate (or not) its data to a third party that has
                previously designated
              </li>
            </ul>
            <p>
              Once{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              has knowledge of the death of a User and failing instructions from
              him,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              undertakes to destroy its data unless conservation is necessary
              for evidentiary purposes or to meet a legal requirement.
            </p>
            <p>
              If the user wants to know how{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              uses his personal data, ask for correct or oppose their treatment,
              the User can contact{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              writing an email to the next address : &nbsp; Alexandre Gros – DPO
              <br />
              alex.gros.pro@gmail.com &nbsp;
            </p>
            <p>
              In this case, the user must specify the Personal Data that he
              would like{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              correct, update or remove, by precisely identifying with a copy of
              an identity document (ID card or passport).
            </p>
            <p>
              Personal Data Removal Requests will be subject to the obligations
              imposed on{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              by law, including conservation or archival documents. Finally,
              users{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              can file a claim with the supervisory authorities, including the
              CNIL (https://www.cnil.fr/fr/plaintes).
            </p>

            <SubSectionSubTitle>
              7.4 Non-disclosure of personal data
            </SubSectionSubTitle>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              is forbidden to process, host or transfer the information
              collected on its customers to a country outside the EU or
              recognized as "not adequate" by the European Commission without
              informing the customer. However,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              is free to choose its technical and commercial contractors
              provided it have sufficient guarantees against the requirements of
              the General Regulation on Data Protection (RGPD: n 2016-679 °).
            </p>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              is committed to taking all necessary precautions to preserve the
              security of information, including that they are not disclosed to
              unauthorized persons. However, if an incident affecting the
              integrity or confidentiality of Customer information is brought to
              the attention of{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              , it will promptly notify the Customer and communicate the
              corrective measures taken. Moreover{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              does not collect any "sensitive data".
            </p>
            <p>
              The User's Personal Data may be handled by subsidiaries of{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              and subcontractors (service providers), exclusively to achieve the
              objectives of this policy.
            </p>
            <p>
              Within the limits of their respective powers and for the purposes
              mentioned above, the main people who may have access to users data{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              are mainly agents of our customer service.
            </p>
          </subSection>
          <subSection>
            <SubSectionTitle className="sub-title">
              8. Incident Notification
            </SubSectionTitle>
            <p>
              Whatever efforts, no method of transmission over the Internet and
              no method of electronic storage is completely safe. We can
              therefore not guarantee absolute safety. If we were aware of a
              security breach, we avertirions affected users so they can take
              appropriate action. Our incident reporting procedures reflect our
              legal obligations, they are at the national or European level. We
              are committed to fully inform our customers of all matters within
              the security of their account and provide all necessary
              information to help them meet their own regulatory reporting
              obligations.
            </p>
            <p>
              No personal information of the site user{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              is published without the knowledge of the user, exchanged,
              transferred, assigned or sold to any support to others. Only the
              assumption of redemption{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              and his rights would allow the transmission of such information to
              the prospective purchaser who would in turn be given the same
              obligation to store and modify data with a screw the site user{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              .
            </p>

            <SubSectionSubTitle>security</SubSectionSubTitle>
            <p>
              To ensure the security and confidentiality of Data and Personal
              Data Health,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              uses networks protected by standard devices such as firewalls,
              pseudonymisation, encryption and password past.
            </p>
            <p>
              When processing personal data,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              take all reasonable measures to protect against loss, misuse,
              unauthorized access, disclosure, alteration or destruction.
            </p>
          </subSection>
          <subSection>
            <SubSectionTitle className="sub-title">
              9. Hyperlinks "cookies" and tags ( "tags") internet
            </SubSectionTitle>
            <p>
              The site{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              contains a number of hypertext links to other sites, set up with
              permission from{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              . However,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              has no opportunity to check the content of the sites visited, and
              accordingly assume no liability therefore.
            </p>
            <p>
              Unless you decide to disable cookies, you agree that the site can
              use. You can always disable cookies and free from disabling
              options available to you and set out below, knowing that it can
              reduce or prevent access to all or part of the services offered by
              the site.
            </p>

            <SubSectionSubTitle>9.1. "COOKIES"</SubSectionSubTitle>
            <p>
              A "cookie" is a small data file sent to the user's browser and
              stored in the user's terminal (eg computer, smartphone),
              (hereinafter "Cookies"). This file includes information such as
              the user's domain name, the Internet provider of the user, the
              operating system of the user, and the date and time of access.
              Cookies may not in any case damage the user's terminal.
            </p>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              may process information from the user regarding his visit to the
              Site, such as pages visited, searches performed. This information
              allows{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              improve the content of the Site, the User navigation.
            </p>
            <p>
              For more general information on cookies see the Wikipedia article
              on HTTP Cookies or check{' '}
              <a
                href="https://cookiesandyou.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                this website
              </a>
              .
            </p>
            <p>
              Cookies facilitate navigation and / or the provision of services
              offered by the Site, the User can configure their browser to
              enable it to decide whether or not to accept the way that cookies
              are stored in the terminal or, conversely, whether rejected or
              systematically or according to their transmitter. Users can
              configure their browser so that the acceptance or rejection of him
              Cookies are occasionally offered before a Cookie is likely to be
              stored in the terminal.{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              informs the User that, in this case, it is possible that the
              functionality of their browser are not all available.
            </p>
            <p>
              You can learn how to manage cookies on your web browser by
              following the{' '}
              <a href="https://privacypolicies.com/blog/browser-cookies-guide/">
                Browser Cookies Guide
              </a>
              .
            </p>
            <p>
              If the User refuses registration of cookies in the terminal or
              browser, or if the user deletes those registered there, the user
              is informed that its navigation and experience on the Site may be
              limited. This could also be the case when{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              or one of its contractors can not recognize, for the purpose of
              technical compatibility, browser type used by the terminal, the
              language settings and display or the country from which the
              terminal seem connected to the Internet.
            </p>
            <p>
              If necessary,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              not responsible for the consequences related to degraded operation
              of the Site and services offered by possibly{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              , resulting from (i) the refusal by Cookie User (ii) the inability{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              record or consult Cookies necessary for their operation because of
              the choice of the user. For managing cookies and choice of the
              user, configuring each browser is different. It is described in
              the browser's help menu, which will know how the user can modify
              his wishes regarding Cookies.
            </p>
            <p>
              At any time, the user can choose to express and modify its wishes
              regarding cookies.{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              can also call on external service providers to help collect and
              process the information in this section.
            </p>
            <p>
              Finally, by clicking on the icons dedicated to social networks
              Twitter, Facebook, Linkedin and Google Plus appearing on the
              Website of{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              or mobile application and if the User has accepted the filing of
              cookies continuing browsing the website or mobile app{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              , Twitter, Facebook, Linkedin and Google Plus may also set cookies
              on your terminal (computer, tablet, mobile phone).
            </p>
            <p>
              {' '}
              These types of cookies are placed on your terminal only if you
              consent to it, continuing browsing the website or mobile app{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              . At any time, the user may still reconsider his consent to{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              the type of cookies.
            </p>

            <SubSectionSubTitle>
              Article 9.2. BEACON ( "TAG") INTERNET
            </SubSectionSubTitle>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              may occasionally use Internet tags (also called "tags", or action
              tags, GIF to a pixel GIFs, transparent GIFs and GIF one by one)
              and deploy them by through a specialist partner web analytics may
              be (and therefore store the relevant information, including the IP
              address of the user) in a foreign country.
            </p>
            <p>
              These tags are placed on both online advertisements that enables
              users to access the Site and on different pages of it.
            </p>
            <p>
              This technology allows{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              assess responses visitors face to the Site and the effectiveness
              of its actions (eg, the number of times a page is opened and
              accessed the information), and that the use of this Site by the
              User.
            </p>
            <p>
              The external service provider will eventually gather information
              about visitors to the Site and other websites through these tags,
              compiling reports on website activity to the attention of{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              and provide other services relating to the use of it and the
              Internet.
            </p>
          </subSection>
          <subSection>
            <SubSectionTitle className="sub-title">
              10. Law and Jurisdiction.
            </SubSectionTitle>
            <p>
              Any dispute related to site usage{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              is subject to French law. Apart from cases where the law does not
              allow it, it is made exclusive jurisdiction of the competent
              courts of Bordeaux.
            </p>
          </subSection>
        </div>
        <br />
        <hr />
        <br />
        <div id="fr">
          <SubSection>
            <Subtitle>Politique de Confidentialité</Subtitle>
            <SubSectionTitle className="sub-title">Définitions</SubSectionTitle>
            <p>
              <b>Client&nbsp;:</b>&nbsp;tout professionnel ou personne physique
              capable au sens des articles 1123 et suivants du Code civil, ou
              personne morale, qui visite le Site objet des présentes conditions
              générales.
              <br />
              <b>Prestations et Services&nbsp;:</b>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              met à disposition des Clients&nbsp;:
            </p>
            <p>
              <b>Contenu&nbsp;:</b>&nbsp;Ensemble des éléments constituants
              l’information présente sur le Site, notamment textes – images –
              vidéos.
            </p>
            <p>
              <b>Informations clients&nbsp;:</b> Ci après dénommé
              «&nbsp;Information (s)&nbsp;» qui correspondent à l’ensemble des
              données personnelles susceptibles d’être détenues par{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              pour la gestion de votre compte, de la gestion de la relation
              client et à des fins d’analyses et de statistiques.
            </p>
            <p>
              <b>Utilisateur :</b> Internaute se connectant, utilisant le site
              susnommé.
            </p>
            <p>
              <b>Informations personnelles :</b> « Les informations qui
              permettent, sous quelque forme que ce soit, directement ou non,
              l'identification des personnes physiques auxquelles elles
              s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
            </p>
            <p>
              Les termes «&nbsp;données à caractère personnel&nbsp;»,
              «&nbsp;personne concernée&nbsp;», «&nbsp;sous traitant&nbsp;» et
              «&nbsp;données sensibles&nbsp;» ont le sens défini par le
              Règlement Général sur la Protection des Données (RGPD&nbsp;: n°
              2016-679)
            </p>
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              1. Présentation du site internet.
            </SubSectionTitle>
            <p>
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour
              la confiance dans l'économie numérique, il est précisé aux
              utilisateurs du site internet&nbsp;
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              &nbsp;l'identité des différents intervenants dans le cadre de sa
              réalisation et de son suivi:
            </p>
            <p>
              <strong>Propriétaire</strong> : Alexandre Gros – 8, Allée du
              moulin de poumey 33170 Gradignan
              <br />
              <strong>Responsable publication</strong> : Alexandre Gros –
              alex.gros.pro@gmail.com
              <br />
              Le responsable publication est une personne physique ou une
              personne morale.
              <br />
              <strong>Webmaster</strong> : Alexandre Gros –
              alex.gros.pro@gmail.com
              <br />
              <strong>Hébergeur</strong> : Vercel Inc. – 340 S Lemon Ave #4133
              Walnut, CA 91789
              <br />
              <strong>Délégué à la protection des données</strong> : Alexandre
              Gros – alex.gros.pro@gmail.com
              <br />
            </p>
            <div ng-bind-html="linkHTML">
              <p>
                Ces mentions légales RGPD sont issues du{' '}
                <a
                  href="https://fr.orson.io/1371/generateur-mentions-legales"
                  title="générateur de mentions légales RGPD d"
                >
                  générateur de mentions légales RGPD d'Orson.io
                </a>
              </p>
            </div>
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              2. Conditions générales d’utilisation du site et des services
              proposés.
            </SubSectionTitle>
            <p>
              Le Site constitue une œuvre de l’esprit protégée par les
              dispositions du Code de la Propriété Intellectuelle et des
              Réglementations Internationales applicables. Le Client ne peut en
              aucune manière réutiliser, céder ou exploiter pour son propre
              compte tout ou partie des éléments ou travaux du Site.
            </p>
            <p>
              L’utilisation du site&nbsp;
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              &nbsp;implique l’acceptation pleine et entière des conditions
              générales d’utilisation ci-après décrites. Ces conditions
              d’utilisation sont susceptibles d’être modifiées ou complétées à
              tout moment, les utilisateurs du site&nbsp;
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              &nbsp;sont donc invités à les consulter de manière régulière.
            </p>
            <p>
              Ce site internet est normalement accessible à tout moment aux
              utilisateurs. Une interruption pour raison de maintenance
              technique peut être toutefois décidée par{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              , qui s’efforcera alors de communiquer préalablement aux
              utilisateurs les dates et heures de l’intervention. Le site
              web&nbsp;
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              &nbsp;est mis à jour régulièrement par{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              responsable. De la même façon, les mentions légales peuvent être
              modifiées à tout moment : elles s’imposent néanmoins à
              l’utilisateur qui est invité à s’y référer le plus souvent
              possible afin d’en prendre connaissance.
            </p>
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              3. Description des services fournis.
            </SubSectionTitle>
            <p>
              Le site internet&nbsp;
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              &nbsp;a pour objet de fournir une information concernant
              l’ensemble des activités de la société.
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              s’efforce de fournir sur le site&nbsp;
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              &nbsp;des informations aussi précises que possible. Toutefois, il
              ne pourra être tenu responsable des oublis, des inexactitudes et
              des carences dans la mise à jour, qu’elles soient de son fait ou
              du fait des tiers partenaires qui lui fournissent ces
              informations.
            </p>
            <p>
              Toutes les informations indiquées sur le site&nbsp;
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              &nbsp;sont données à titre indicatif, et sont susceptibles
              d’évoluer. Par ailleurs, les renseignements figurant sur le
              site&nbsp;
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              &nbsp;ne sont pas exhaustifs. Ils sont donnés sous réserve de
              modifications ayant été apportées depuis leur mise en ligne.
            </p>
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              4. Limitations contractuelles sur les données techniques.
            </SubSectionTitle>
            <p>
              Le site utilise la technologie JavaScript. Le site Internet ne
              pourra être tenu responsable de dommages matériels liés à
              l’utilisation du site. De plus, l’utilisateur du site s’engage à
              accéder au site en utilisant un matériel récent, ne contenant pas
              de virus et avec un navigateur de dernière génération mis-à-jour.
            </p>
            <p>
              L’objectif est d’apporter une prestation qui assure le meilleur
              taux d’accessibilité. L’hébergeur assure la continuité de son
              service 24 Heures sur 24, tous les jours de l’année. Il se réserve
              néanmoins la possibilité d’interrompre le service d’hébergement
              pour les durées les plus courtes possibles notamment à des fins de
              maintenance, d’amélioration de ses infrastructures, de défaillance
              de ses infrastructures ou si les Prestations et Services génèrent
              un trafic réputé anormal.
            </p>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              et l’hébergeur ne pourront être tenus responsables en cas de
              dysfonctionnement du réseau Internet, des lignes téléphoniques ou
              du matériel informatique et de téléphonie lié notamment à
              l’encombrement du réseau empêchant l’accès au serveur.
            </p>
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              5. Propriété intellectuelle et contrefaçons.
            </SubSectionTitle>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              est propriétaire des droits de propriété intellectuelle et détient
              les droits d’usage sur tous les éléments accessibles sur le site
              internet, notamment les textes, images, graphismes, logos, vidéos,
              icônes et sons. Toute reproduction, représentation, modification,
              publication, adaptation de tout ou partie des éléments du site,
              quel que soit le moyen ou le procédé utilisé, est interdite, sauf
              autorisation écrite préalable de :{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              .
            </p>
            <p>
              Toute exploitation non autorisée du site ou de l’un quelconque des
              éléments qu’il contient sera considérée comme constitutive d’une
              contrefaçon et poursuivie conformément aux dispositions des
              articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              6. Limitations de responsabilité.
            </SubSectionTitle>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              agit en tant qu’éditeur du site.{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              &nbsp;est responsable de la qualité et de la véracité du Contenu
              qu’il publie.{' '}
            </p>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              ne pourra être tenu responsable des dommages directs et indirects
              causés au matériel de l’utilisateur, lors de l’accès au site
              internet{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              , et résultant soit de l’utilisation d’un matériel ne répondant
              pas aux spécifications indiquées au point 4, soit de l’apparition
              d’un bug ou d’une incompatibilité.
            </p>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              ne pourra également être tenu responsable des dommages indirects
              (tels par exemple qu’une perte de marché ou perte d’une chance)
              consécutifs à l’utilisation du site&nbsp;
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              . Des espaces interactifs (possibilité de poser des questions dans
              l’espace contact) sont à la disposition des utilisateurs.{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              se réserve le droit de supprimer, sans mise en demeure préalable,
              tout contenu déposé dans cet espace qui contreviendrait à la
              législation applicable en France, en particulier aux dispositions
              relatives à la protection des données. Le cas échéant,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              se réserve également la possibilité de mettre en cause la
              responsabilité civile et/ou pénale de l’utilisateur, notamment en
              cas de message à caractère raciste, injurieux, diffamant, ou
              pornographique, quel que soit le support utilisé (texte,
              photographie …).
            </p>
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              7. Gestion des données personnelles.
            </SubSectionTitle>
            <p>
              Le Client est informé des réglementations concernant la
              communication marketing, la loi du 21 Juin 2014 pour la confiance
              dans l’Economie Numérique, la Loi Informatique et Liberté du 06
              Août 2004 ainsi que du Règlement Général sur la Protection des
              Données (RGPD&nbsp;: n° 2016-679).{' '}
            </p>
            <SubSectionSubTitle>
              7.1 Responsables de la collecte des données personnelles
            </SubSectionSubTitle>
            <p>
              Pour les Données Personnelles collectées dans le cadre de la
              section contact et de sa navigation sur le Site, le responsable du
              traitement des Données Personnelles est : Alexandre Gros.{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              est représenté par Alexandre Gros, son représentant légal.
            </p>
            <p>
              En tant que responsable du traitement des données qu’il collecte,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              s’engage à respecter le cadre des dispositions légales en vigueur.
              Il lui appartient notamment au Client d’établir les finalités de
              ses traitements de données, de fournir à ses prospects et clients,
              à partir de la collecte de leurs consentements, une information
              complète sur le traitement de leurs données personnelles et de
              maintenir un registre des traitements conforme à la réalité.
              Chaque fois que{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              traite des Données Personnelles,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              prend toutes les mesures raisonnables pour s’assurer de
              l’exactitude et de la pertinence des Données Personnelles au
              regard des finalités pour lesquelles{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              les traite.
            </p>
            &nbsp;
            <SubSectionSubTitle>
              7.2 Finalité des données collectées
            </SubSectionSubTitle>
            &nbsp;
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              est susceptible de traiter tout ou partie des données :{' '}
            </p>
            <ul>
              <li>
                pour permettre la navigation sur le Site et la gestion et la
                traçabilité des prestations et services commandés par
                l’utilisateur : données de connexion et d’utilisation du Site,
                facturation, historique des commandes, etc.{' '}
              </li>
              &nbsp;
              <li>
                pour prévenir et lutter contre la fraude informatique (spamming,
                hacking…) : matériel informatique utilisé pour la navigation,
                l’adresse IP, le mot de passe (hashé){' '}
              </li>
              &nbsp;
              <li>
                pour améliorer la navigation sur le Site : données de connexion
                et d’utilisation{' '}
              </li>
              &nbsp;
              <li>
                pour mener des enquêtes de satisfaction facultatives sur{' '}
                <a href="https://www.alexgwebdev.com">
                  https://www.alexgwebdev.com
                </a>{' '}
                : adresse email{' '}
              </li>
              &nbsp;
              <li>
                pour mener des campagnes de communication (sms, mail) : numéro
                de téléphone, adresse email
              </li>
            </ul>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              ne commercialise pas vos données personnelles qui sont donc
              uniquement utilisées par nécessité ou à des fins statistiques et
              d’analyses.
            </p>
            &nbsp;
            <SubSectionSubTitle>
              7.3 Droit d’accès, de rectification et d’opposition
            </SubSectionSubTitle>
            &nbsp;
            <p>
              Conformément à la réglementation européenne en vigueur, les
              Utilisateurs de{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              disposent des droits suivants :{' '}
            </p>
            &nbsp;
            <ul>
              <li>
                droit d'accès (article 15 RGPD) et de rectification (article 16
                RGPD), de mise à jour, de complétude des données des
                Utilisateurs droit de verrouillage ou d’effacement des données
                des Utilisateurs à caractère personnel (article 17 du RGPD),
                lorsqu’elles sont inexactes, incomplètes, équivoques, périmées,
                ou dont la collecte, l'utilisation, la communication ou la
                conservation est interdite{' '}
              </li>
              &nbsp;
              <li>
                droit de retirer à tout moment un consentement (article 13-2c
                RGPD){' '}
              </li>
              &nbsp;
              <li>
                droit à la limitation du traitement des données des Utilisateurs
                (article 18 RGPD){' '}
              </li>
              &nbsp;
              <li>
                droit d’opposition au traitement des données des Utilisateurs
                (article 21 RGPD){' '}
              </li>
              &nbsp;
              <li>
                droit à la portabilité des données que les Utilisateurs auront
                fournies, lorsque ces données font l’objet de traitements
                automatisés fondés sur leur consentement ou sur un contrat
                (article 20 RGPD){' '}
              </li>
              &nbsp;
              <li>
                droit de définir le sort des données des Utilisateurs après leur
                mort et de choisir à qui{' '}
                <a href="https://www.alexgwebdev.com">
                  https://www.alexgwebdev.com
                </a>{' '}
                devra communiquer (ou non) ses données à un tiers qu’ils aura
                préalablement désigné
              </li>
              &nbsp;
            </ul>
            <p>
              Dès que{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              a connaissance du décès d’un Utilisateur et à défaut
              d’instructions de sa part,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              s’engage à détruire ses données, sauf si leur conservation s’avère
              nécessaire à des fins probatoires ou pour répondre à une
              obligation légale.
            </p>
            &nbsp;
            <p>
              Si l’Utilisateur souhaite savoir comment{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              utilise ses Données Personnelles, demander à les rectifier ou
              s’oppose à leur traitement, l’Utilisateur peut contacter{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              par courriel à l’adresse suivante :{' '}
            </p>
            <p>
              Alexandre Gros – DPO <br />
              alex.gros.pro@gmail.com
            </p>
            <p>
              Dans ce cas, l’Utilisateur doit indiquer les Données Personnelles
              qu’il souhaiterait que{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              corrige, mette à jour ou supprime, en s’identifiant précisément
              avec une copie d’une pièce d’identité (carte d’identité ou
              passeport).{' '}
            </p>
            <p>
              Les demandes de suppression de Données Personnelles seront
              soumises aux obligations qui sont imposées à{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              par la loi, notamment en matière de conservation ou d’archivage
              des documents. Enfin, les Utilisateurs de{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              peuvent déposer une réclamation auprès des autorités de contrôle,
              et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).
            </p>
            &nbsp;
            <SubSectionSubTitle>
              7.4 Non-communication des données personnelles
            </SubSectionSubTitle>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              s’interdit de traiter, héberger ou transférer les Informations
              collectées sur ses Clients vers un pays situé en dehors de l’Union
              européenne ou reconnu comme «&nbsp;non adéquat&nbsp;» par la
              Commission européenne sans en informer préalablement le client.
              Pour autant,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              reste libre du choix de ses sous-traitants techniques et
              commerciaux à la condition qu’il présentent les garanties
              suffisantes au regard des exigences du Règlement Général sur la
              Protection des Données (RGPD&nbsp;: n° 2016-679).
            </p>
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              s’engage à prendre toutes les précautions nécessaires afin de
              préserver la sécurité des Informations et notamment qu’elles ne
              soient pas communiquées à des personnes non autorisées. Cependant,
              si un incident impactant l’intégrité ou la confidentialité des
              Informations du Client est portée à la connaissance de{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              , celle-ci devra dans les meilleurs délais informer le Client et
              lui communiquer les mesures de corrections prises. Par ailleurs{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              ne collecte aucune «&nbsp;données sensibles&nbsp;».
            </p>
            <p>
              Les Données Personnelles de l’Utilisateur peuvent être traitées
              par des filiales de{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              et des sous-traitants (prestataires de services), exclusivement
              afin de réaliser les finalités de la présente politique.
            </p>
            <p>
              Dans la limite de leurs attributions respectives et pour les
              finalités rappelées ci-dessus, les principales personnes
              susceptibles d’avoir accès aux données des Utilisateurs de{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              sont principalement les agents de notre service client.
            </p>
            <div ng-bind-html="rgpdHTML" />
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              8. Notification d’incident
            </SubSectionTitle>
            <p>
              Quels que soient les efforts fournis, aucune méthode de
              transmission sur Internet et aucune méthode de stockage
              électronique n'est complètement sûre. Nous ne pouvons en
              conséquence pas garantir une sécurité absolue. Si nous prenions
              connaissance d'une brèche de la sécurité, nous avertirions les
              utilisateurs concernés afin qu'ils puissent prendre les mesures
              appropriées. Nos procédures de notification d’incident tiennent
              compte de nos obligations légales, qu'elles se situent au niveau
              national ou européen. Nous nous engageons à informer pleinement
              nos clients de toutes les questions relevant de la sécurité de
              leur compte et à leur fournir toutes les informations nécessaires
              pour les aider à respecter leurs propres obligations
              réglementaires en matière de reporting.
            </p>
            <p>
              Aucune information personnelle de l'utilisateur du site&nbsp;
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              &nbsp;n'est publiée à l'insu de l'utilisateur, échangée,
              transférée, cédée ou vendue sur un support quelconque à des tiers.
              Seule l'hypothèse du rachat de{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              et de ses droits permettrait la transmission des dites
              informations à l'éventuel acquéreur qui serait à son tour tenu de
              la même obligation de conservation et de modification des données
              vis à vis de l'utilisateur du site&nbsp;
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              .
            </p>
            <SubSectionSubTitle>Sécurité</SubSectionSubTitle>
            <p>
              Pour assurer la sécurité et la confidentialité des Données
              Personnelles et des Données Personnelles de Santé,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              utilise des réseaux protégés par des dispositifs standards tels
              que par pare-feu, la pseudonymisation, l’encryption et mot de
              passe.{' '}
            </p>
            &nbsp;
            <p>
              Lors du traitement des Données Personnelles,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              prend toutes les mesures raisonnables visant à les protéger contre
              toute perte, utilisation détournée, accès non autorisé,
              divulgation, altération ou destruction.
            </p>
            &nbsp;
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              9. Liens hypertextes « cookies » et balises (“tags”) internet
            </SubSectionTitle>
            <p>
              Le site&nbsp;
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              &nbsp;contient un certain nombre de liens hypertextes vers
              d’autres sites, mis en place avec l’autorisation de{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              . Cependant,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              n’a pas la possibilité de vérifier le contenu des sites ainsi
              visités, et n’assumera en conséquence aucune responsabilité de ce
              fait.
            </p>
            Sauf si vous décidez de désactiver les cookies, vous acceptez que le
            site puisse les utiliser. Vous pouvez à tout moment désactiver ces
            cookies et ce gratuitement à partir des possibilités de
            désactivation qui vous sont offertes et rappelées ci-après, sachant
            que cela peut réduire ou empêcher l’accessibilité à tout ou partie
            des Services proposés par le site.
            <p />
            <SubSectionSubTitle>9.1. « COOKIES »</SubSectionSubTitle>
            &nbsp;
            <p>
              Un « cookie » est un petit fichier d’information envoyé sur le
              navigateur de l’Utilisateur et enregistré au sein du terminal de
              l’Utilisateur (ex : ordinateur, smartphone), (ci-après « Cookies
              »). Ce fichier comprend des informations telles que le nom de
              domaine de l’Utilisateur, le fournisseur d’accès Internet de
              l’Utilisateur, le système d’exploitation de l’Utilisateur, ainsi
              que la date et l’heure d’accès. Les Cookies ne risquent en aucun
              cas d’endommager le terminal de l’Utilisateur.
            </p>
            &nbsp;
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              est susceptible de traiter les informations de l’Utilisateur
              concernant sa visite du Site, telles que les pages consultées, les
              recherches effectuées. Ces informations permettent à{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              d’améliorer le contenu du Site, de la navigation de l’Utilisateur.
            </p>
            &nbsp;
            <p>
              Pour en savoir plus sur les cookies, voir la page Wikipedia "HTTP
              Cookies" ou voir{' '}
              <a
                href="https://cookiesandyou.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ce site
              </a>
              .
            </p>
            <p>
              Les Cookies facilitant la navigation et/ou la fourniture des
              services proposés par le Site, l’Utilisateur peut configurer son
              navigateur pour qu’il lui permette de décider s’il souhaite ou non
              les accepter de manière à ce que des Cookies soient enregistrés
              dans le terminal ou, au contraire, qu’ils soient rejetés, soit
              systématiquement, soit selon leur émetteur. L’Utilisateur peut
              également configurer son logiciel de navigation de manière à ce
              que l’acceptation ou le refus des Cookies lui soient proposés
              ponctuellement, avant qu’un Cookie soit susceptible d’être
              enregistré dans son terminal.{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              informe l’Utilisateur que, dans ce cas, il se peut que les
              fonctionnalités de son logiciel de navigation ne soient pas toutes
              disponibles.
            </p>
            &nbsp;
            <p>
              Si l’Utilisateur refuse l’enregistrement de Cookies dans son
              terminal ou son navigateur, ou si l’Utilisateur supprime ceux qui
              y sont enregistrés, l’Utilisateur est informé que sa navigation et
              son expérience sur le Site peuvent être limitées. Cela pourrait
              également être le cas lorsque{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              ou l’un de ses prestataires ne peut pas reconnaître, à des fins de
              compatibilité technique, le type de navigateur utilisé par le
              terminal, les paramètres de langue et d’affichage ou le pays
              depuis lequel le terminal semble connecté à Internet.
            </p>
            &nbsp;
            <p>
              Vous pouvez apprendre à gérer les cookies sur votre navigateur en
              suivant le{' '}
              <a href="https://privacypolicies.com/blog/browser-cookies-guide/">
                Guide des cookies
              </a>
              .
            </p>
            <p>
              Le cas échéant,{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              décline toute responsabilité pour les conséquences liées au
              fonctionnement dégradé du Site et des services éventuellement
              proposés par{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              , résultant (i) du refus de Cookies par l’Utilisateur (ii) de
              l’impossibilité pour{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              d’enregistrer ou de consulter les Cookies nécessaires à leur
              fonctionnement du fait du choix de l’Utilisateur. Pour la gestion
              des Cookies et des choix de l’Utilisateur, la configuration de
              chaque navigateur est différente. Elle est décrite dans le menu
              d’aide du navigateur, qui permettra de savoir de quelle manière
              l’Utilisateur peut modifier ses souhaits en matière de Cookies.
            </p>
            &nbsp;
            <p>
              À tout moment, l’Utilisateur peut faire le choix d’exprimer et de
              modifier ses souhaits en matière de Cookies.{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              pourra en outre faire appel aux services de prestataires externes
              pour l’aider à recueillir et traiter les informations décrites
              dans cette section.
            </p>
            &nbsp;
            <p>
              Enfin, en cliquant sur les icônes dédiées aux réseaux sociaux
              Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              ou dans son application mobile et si l’Utilisateur a accepté le
              dépôt de cookies en poursuivant sa navigation sur le Site Internet
              ou l’application mobile de{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              , Twitter, Facebook, Linkedin et Google Plus peuvent également
              déposer des cookies sur vos terminaux (ordinateur, tablette,
              téléphone portable).
            </p>
            &nbsp;
            <p>
              Ces types de cookies ne sont déposés sur vos terminaux qu’à
              condition que vous y consentiez, en continuant votre navigation
              sur le Site Internet ou l’application mobile de{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              . À tout moment, l’Utilisateur peut néanmoins revenir sur son
              consentement à ce que{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              dépose ce type de cookies.
            </p>
            &nbsp;
            <SubSectionSubTitle>
              Article 9.2. BALISES (“TAGS”) INTERNET
            </SubSectionSubTitle>
            &nbsp;
            <p>
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              peut employer occasionnellement des balises Internet (également
              appelées « tags », ou balises d’action, GIF à un pixel, GIF
              transparents, GIF invisibles et GIF un à un) et les déployer par
              l’intermédiaire d’un partenaire spécialiste d’analyses Web
              susceptible de se trouver (et donc de stocker les informations
              correspondantes, y compris l’adresse IP de l’Utilisateur) dans un
              pays étranger.
            </p>
            &nbsp;
            <p>
              Ces balises sont placées à la fois dans les publicités en ligne
              permettant aux internautes d’accéder au Site, et sur les
              différentes pages de celui-ci. &nbsp;
            </p>
            <p>
              Cette technologie permet à{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>{' '}
              d’évaluer les réponses des visiteurs face au Site et l’efficacité
              de ses actions (par exemple, le nombre de fois où une page est
              ouverte et les informations consultées), ainsi que l’utilisation
              de ce Site par l’Utilisateur.{' '}
            </p>
            &nbsp;
            <p>
              Le prestataire externe pourra éventuellement recueillir des
              informations sur les visiteurs du Site et d’autres sites Internet
              grâce à ces balises, constituer des rapports sur l’activité du
              Site à l’attention de{' '}
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              , et fournir d’autres services relatifs à l’utilisation de
              celui-ci et d’Internet.
            </p>
            &nbsp;
            <p />
          </SubSection>
          <SubSection>
            <SubSectionTitle className="sub-title">
              10. Droit applicable et attribution de juridiction.
            </SubSectionTitle>
            <p>
              Tout litige en relation avec l’utilisation du site&nbsp;
              <a href="https://www.alexgwebdev.com">
                https://www.alexgwebdev.com
              </a>
              &nbsp;est soumis au droit français. En dehors des cas où la loi ne
              le permet pas, il est fait attribution exclusive de juridiction
              aux tribunaux compétents de Bordeaux.
            </p>
          </SubSection>
        </div>
      </PrivacyPageWrapper>
    </PrivacyWrapper>
  );
}

const PrivacyWrapper = styled.section`
  padding-bottom: 1rem;
`;

const PrivacyPageWrapper = styled.section`
  margin: -4rem auto 2rem auto;
  padding: 0 2rem;
  a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
  p {
    font-size: 1.1rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }
`;

const SubSection = styled.div`
  margin: 1rem auto;
`;
const SubSectionTitle = styled.h2`
  color: var(--color-primary);
  margin-bottom: 1rem;
`;

const SubSectionSubTitle = styled.h3`
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
`;
