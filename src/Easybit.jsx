import { React, useState } from 'react';
import styled from 'styled-components';
import BtcHero from './assets/btchero.png';

import Header from './Header';
import UserWallet from './assets/user-redeem.png';
import Gift from './assets/gift.png';
import Generate from './assets/generating-link.png';
import LinkReady from './assets/link-ready.png';
import TopUpModal from './assets/topupmodal.png';
import TopUp1 from './assets/topup1.png';
import TopUp2 from './assets/topup2.png';
import Bank from './assets/banktransfer.png';
import BtcActive from './assets/btc-active.png';
import BtcHome from './assets/btc-home.png';
import Campaign from './assets/campaign.png';
import NextIcon from './assets/next.svg';
import ArrowLeft from './assets/left-arrow.svg';
import EasyBit from './assets/easybit-hero.png';
import Bg from './assets/bgpattern.svg';
import { Link } from 'react-router-dom';

// import Campaign from './video/campaign.mp4';
import ReactPlayer from 'react-player';

const EasyBitCaseStudy = () => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper>
      <AboveFold>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Hero>
          <div>
            <HeroHeading>EASYBIT</HeroHeading>
            <Text style={{ width: '550px' }}>
              With Easybit's innovative approach to sending and receiving
              bitcoin and support for giveaways,we are helping to drive bitcoin
              adoption and bring cryptocurrency into the mainstream
            </Text>
          </div>
          <BgPattern src={Bg} alt="" />
          <HeroImage src={EasyBit} alt="" />
        </Hero>
      </AboveFold>
      <Section>
        <Heading>PRODUCT OVERVIEW</Heading>
        <Text>
          {/* Easybit is a platform that seeks to increase bitcoin adoption amongst
          youth in Africa by making it easier to send and receive gifts in
          bitcoin. It also seeks to make it easy to create and participate in
          giveaway campaigns which is popular amongst the youth. */}
          Easybit is a platform that empowers young people in Africa to embrace
          the future of money by making it easy to send and receive gifts with
          bitcoin. With our user-friendly interface and fun giveaway campaigns,
          we're helping the next generation discover the benefits of bitcoin to
          not just see it as a speculative asset but something beyond that.
        </Text>
      </Section>
      <Section>
        <Heading>WHY GIFTS AND GIVEAWAYS?</Heading>
        <Text>
          {/* We chose this two methods as a means of increasing bitcoin adoption
          because it is popular and there is a lot of interest around it amongst
          our target audience. So we seek to leverage that popularity and
          interest to create a better experience around those concepts using
          bitcoin, so as to drive adoption We all are farmiliar with sending and
          receiving gifts but giveaway might need a little definition. A
          giveaway on Twitter is a contest or promotion in which the organizer
          offers a prize to one or more Twitter users who meet certain criteria
          or perform certain actions. Giveaways on Twitter are often used by
          businesses and organizations as a way to promote their products or
          services, or to engage with their followers and build a community
          around their brand. To participate in a Twitter giveaway, users
          typically need to follow the organizer on Twitter and retweet the
          giveaway tweet or tweet using a specific hashtag. Sending gifts and giveaways even though popular 
          come with their issues are some like difficulty claiming prize, stressful to
          manage,lack of transparency e.t.c */}
          We chose to focus on gifts and giveaways as a way to increase bitcoin
          adoption because they are popular and of interest to our target
          audience.{' '}
          <span>
            By creating a better experience around these concepts using bitcoin,
            we aim to leverage their popularity and interest to drive adoption.
          </span>
        </Text>
        <Text>
          We're all familiar with sending and receiving gifts, but giveaways
          might need a little explanation. A Twitter giveaway is a contest or
          promotion in which the organizer offers a prize to users who meet
          certain criteria or perform certain actions. Businesses and
          organizations often use giveaways on Twitter to promote their products
          or services, or to engage with their followers and build a community.
          To participate in a Twitter giveaway, users typically need to follow
          the organizer and retweet the giveaway tweet or tweet using a specific
          hashtag.
        </Text>
        <Text>
          While sending gifts and participating in giveaways can be fun and
          exciting, they can also come with challenges. For example, claiming
          the prize can be difficult, managing the giveaway can be stressful,
          and there may be a lack of transparency in the rules and criteria for
          participation. By using bitcoin, we aim to overcome these challenges
          and create a better experience for our users.
        </Text>
      </Section>
      <Section>
        <Heading>BOOSTING BITCOIN ADOPTION THROUGH A BETTER EXPERIENCE</Heading>
        <Text>
          {/* Ease of use,ease of claiming prize,transparency and automation were
          some of the experiences we imroved On the app, sending and receiving
          bitcoin is very easy. You click on gift and how much you want to gift
          and it automatically generates a link that the beneficiary can use to
          redeem.To do a giveaway all you need to do is to do is fund the
          campaign, select the number of people you want to win, the task to be
          done and that is it they don't have to worry about anything again. On
          the order hand all the beneficiary has to do is to do the task
          assigned on the platform assigned and if qualified automatically get a
          link which they can just click on and redeem. */}
          Our app has been designed with ease of use, better structure, and
          transparency in mind. Sending and receiving bitcoin is very easy -
          simply click on the "gift" button and enter the desired amount. The
          app will automatically generate a link for the recipient to redeem
          their gift.
        </Text>

        <Text>
          {' '}
          Conducting a giveaway is equally simple - just fund the campaign,
          select the number of winners and the task to be completed. The
          beneficiaries only need to do the assigned task on the platform, and
          if they are qualified they will automatically receive a link to redeem
          their prize. No need to worry about any additional steps.
        </Text>

        <Text>
          We believe that these improvements enhance the overall user experience
          and makes it easy for us to take advantage of that and increase
          adoption.
        </Text>

        <Heading2>CREATING A CAMPAIGN </Heading2>
        {/* <div
          style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}
        >
          <iframe
            src="https://www.loom.com/embed/57a6e4d604064148b56f4cc66b74c868"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </div> */}
        <div
          style={{
            padding: '60% 0 0 0',
            paddingBottom: '10%',
            position: 'relative',
            transform: 'translateY(-100px)',
            zIndex: '11',
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/779230702?h=71f95d94c8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
            title="Add campaign flow.webm"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        {/* <Text>
          After creating the campaign, and filling the above criteria,using the
          tweeter API we listen to events from our backend that fulfill the
          pre-set conditions.Whenever someone fulfills the needed condition like
          liking or retweeting depending on what was pre-determined,we
          automatically create a lightning wallet for them with their winnings
          in btc and send the link to their DM
        </Text> */}
        <div
          style={{
            // height: '800px',
            paddingTop: '32px',
            paddingBottom: '32px',
            display: 'flex',
            justifyContent: 'center',
            background: '#E9F1FF',
            transform: 'translateY(-100px)',
            borderRadius: '8px',
            gap: '40px',
          }}
        >
          <img src={BtcHome} alt="" />
          <img src={Campaign} alt="" />
          <img src={BtcActive} alt="" />
        </div>
        <Heading>EASY TO REDEEM</Heading>
        <Text>
          To access their funds, the winner simply needs to click on the link
          sent to them. This will automatically redirect them to their own
          personal lightning wallet, where their funds will be pre-loaded and
          ready to use. From here, they can either scan the QR code to transfer
          their funds to another exchange, or they can copy the address and use
          it to make a purchase at any merchant that accepts bitcoin. It's easy,
          fast, and secure - a major driver for increased adoption.
        </Text>
        <div
          style={{
            // height: '800px',
            paddingTop: '32px',
            paddingBottom: '32px',
            display: 'flex',
            justifyContent: 'center',
            background: '#E9F1FF',
            marginTop: '40px',
            borderRadius: '8px',
          }}
        >
          <img src={UserWallet} alt="" />
        </div>
      </Section>
      <Section>
        <Heading>EASILY SEND AND RECEIVE GIFTS</Heading>
        <Text>
          We believe that making it easy to send bitcoin to anyone, and then
          automatically providing the recipient with a wallet containing their
          funds, is a great way to increase adoption. To make this process as
          hassle-free as possible, we have implemented a system where users can
          generate a link and send it to anyone via WhatsApp, text, email, etc.
          All the recipient needs to do is click on the link and they will be
          onboarded onto the platform with their funds already in their wallet.
          This simplifies the process and allows anyone to easily and securely
          receive bitcoin.
        </Text>
        <div
          style={{
            // height: '800px',
            paddingTop: '32px',
            paddingBottom: '32px',
            display: 'flex',
            justifyContent: 'center',
            background: '#E9F1FF',
            marginTop: '40px',
            borderRadius: '8px',
            gap: '16px',
          }}
        >
          <img src={Gift} alt="" />
          <img src={Generate} alt="" />
          <img src={LinkReady} alt="" />
        </div>
      </Section>
      <Section>
        <Heading>EASY FUNDING</Heading>
        <Text>
          {/* It is important that funding one's wallet is as seamless and easy as
          possible because that in itself is a barrier for adoption. So on our
          app a user can si either choose to top up their wallet with their
          local currency or BTC.When a user choose to fund via local currency,
          we provide a dedicated account which they can make a simple bank
          transfer to. We then convert it automatically into BTC. */}
          We recognize that the ease of funding one's wallet is a critical
          factor in driving adoption. That's why we have made it simple and
          straightforward for users to top up their wallet on our app.
        </Text>

        <Text>
          Users can choose to fund their wallet using either their local
          currency or bitcoin. When using local currency, we provide a dedicated
          account where users can make a simple bank transfer. We then
          automatically convert the funds into bitcoin, so the user can start
          using it right away.Meanwhile if they have bitcoin in other wallets
          they can simply transfer it by either scanning QR code or using their
          wallet address.
        </Text>

        <Text>
          This streamlined process removes barriers and makes it easy for anyone
          to get started with bitcoin. We believe that by making it easy to fund
          a wallet, we can help increase the adoption of bitcoin and make it
          more accessible to everyone.
        </Text>

        <div
          style={{
            // height: '800px',
            paddingTop: '32px',
            paddingBottom: '32px',
            display: 'flex',
            justifyContent: 'center',
            background: '#E9F1FF',
            marginTop: '40px',
            borderRadius: '8px',
            gap: '16px',
          }}
        >
          <img src={TopUpModal} alt="" />
          <img src={TopUp1} alt="" />
          <img src={TopUp2} alt="" />
        </div>

        <div
          style={{
            // height: '800px',
            paddingTop: '32px',
            paddingBottom: '32px',
            display: 'flex',
            justifyContent: 'center',
            background: '#E9F1FF',
            marginTop: '40px',
            borderRadius: '8px',
            gap: '16px',
          }}
        >
          <img src={Bank} alt="" />
        </div>
      </Section>
      <Section>
        <Heading>CONCLUSION</Heading>
        {/* There is no on cap size fits all when it comes to bitcoin adoption. Different categories of people have different needs.
        Our focus was mainly on the youth and tech-savvy as that constitutes a large part of the population as well,
        By focusing on ease of use and creating better experience around concepts people are already farmiliar with
        using bitcoin we are able to we can help increase bitcoin adoption and make the cryptocurrency more accessible to everyone.
        Next step is to have links to online shops where the winners can be able to spend their bitcoin directly on 
        the platform. */}
        <Text>
          {' '}
          When it comes to increasing bitcoin adoption, there is no
          one-size-fits-all approach. Different categories of people have
          different needs and preferences, and it is important to tailor
          solutions to these specific groups.
        </Text>

        <Text>
          In our case, we focused on the youth and tech-savvy individuals, as
          this segment of the population is particularly interested in and
          receptive to new technologies. By designing our app to be intuitive
          and user-friendly, and by creating a better experience around concepts
          that people are already familiar with, such as sending and receiving
          gifts and participating in giveaways, we were able to increase bitcoin
          adoption among this target audience.
        </Text>

        <Text>
          {' '}
          In the next step, we plan to provide links to online shops where the
          winners of our giveaways can spend their bitcoin directly on the
          platform. This will further enhance the user experience and make it
          even easier for our users to take advantage of the benefits of
          bitcoin.
        </Text>

        <Text>
          By focusing on the specific needs of our target audience and
          continuously improving the user experience, we believe we can help
          drive the adoption of bitcoin and make it more accessible to everyone
        </Text>
      </Section>
      <Section style={{ display: 'flex' }}>
        <NavLink
          style={{ textDecoration: 'none', zIndex: '10' }}
          to="/difftraka"
        >
          <Button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <span>NEXT PROJECT</span>
            {hover ? (
              //
              // ) : (
              //
              <img src={ArrowLeft} alt="" />
            ) : (
              <img src={NextIcon} alt="" />
            )}
          </Button>
        </NavLink>
      </Section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #f6f7f7;
`;
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 5;
`;
const AboveFold = styled.div`
  /* background-image: url(${HeroImage}); */

  background-color: #e9f1ff;
  position: relative;
  overflow: hidden;
  height: 700px;
`;
const Heading = styled.h1`
  font-family: 'DIN2014', sans-serif;
  font-size: 48px;
  font-weight: 800;
`;
const HeroHeading = styled(Heading)`
  font-size: 56px;
`;
const Heading2 = styled(Heading)`
  font-size: 32px;
  color: #121212;
  margin-top: 32px;
`;
const Text = styled.p`
  font-family: 'FreightText', sans-serif;
  font-size: 20px;
  font-weight: 400;
  max-width: 800px;
  margin-top: 24px;
  & span {
    font-weight: 800;
  }
`;
const Section = styled.section`
  padding: 50px 200px 50px;
`;

const Button = styled.button`
  display: flex;
  gap: 8px;
  height: 51px;
  width: 258px;
  color: #121212;
  font-family: 'DIN2014';
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid #121212;

  & span {
    font-size: 20px;
    font-weight: 500;
  }
`;
const NavLink = styled(Link)`
  transform: translateX(800px);
  /* top: 450px; */
  & :hover {
    background: #121212;
    color: #ffffff;
  }
`;
const Hero = styled.div`
  display: flex;
  gap: 96px;
  position: relative;
  margin-top: 80px;
  padding: 120px 100px 0px;
  height: 600px;
`;
const HeroImage = styled.img`
  position: absolute;
  right: -100px;
  top: 20px;
`;
const BgPattern = styled.img`
  position: absolute;

  right: 50px;
  top: 50px;
`;
export default EasyBitCaseStudy;
