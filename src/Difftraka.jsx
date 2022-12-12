import { React, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './Header';
import Women from './assets/women.svg';
import Chart from './assets/chart.svg';
import Inclusion from './assets/inclusion.svg';
import Statement from './assets/statement.png';
import Adashe1 from './assets/Adashe1.png';
import Adashe2 from './assets/Adashe2.png';
import Lender1 from './assets/Lender1.png';
import Lender2 from './assets/Lender2.png';
import NextIcon from './assets/next.svg';
import ArrowLeft from './assets/left-arrow.svg';
import { Link } from 'react-router-dom';
import PreviousUp from './assets/arrow-left-black.svg';
import PreviousIcon from './assets/arrow-left-black.svg';

const DiffCaseStudy = () => {
  return (
    <Wrapper>
      <AboveFold>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Hero>
          <div>
            <Bar />
            <HeroHeading>DIFFTRAKA</HeroHeading>
            <Text>
              Building a digital financial footprint for the financially
              excluded.
            </Text>
          </div>
          <HeroImage src={Women} alt="" />
        </Hero>
      </AboveFold>
      <SlideLeft>
        <Section>
          <div>
            <Heading>OVERVIEW</Heading>
            <Text>
              Financial inclusion simply put, means bringing those who are
              currently not enjoying financial services such as savings, credit,
              payment, pensions, insurance, remittances amongst others into the
              financial system and by so doing, access and use such services for
              economic /other activities that better their lots. The digital
              financial solutions gender gap in Nigeria, and more specifically
              the north of the country (including Kaduna), not only exists, it
              has widened. According to the 2021 EfiNA report, there is still a
              financial inclusion gap, with 68% of the population in the North
              West area being financially excluded, a rise of 5.4% since 2018.
              In Kaduna, <span>women make up 50% </span> of company owners, but{' '}
              <span>62% </span> of them are financially excluded.
            </Text>
          </div>
          {/* <Image
          src={Chart}
          alt=""
          style={{ transform: 'translateY(40px)' }}
          style={{ width: '200px' }}
        /> */}
        </Section>
      </SlideLeft>
      <Section>
        <Heading>MY ROLE</Heading>
        <Text>
          I led a team of six people including product designers and developers
          to build this for the{' '}
          <span>
            "Kaduna State Government Women Financial Inclusion Hackathon "
          </span>
          which we came 2nd place.
          <Heading2>TEAMMATES</Heading2>
          <Text>Adinoyi Ismaila (Product Design)</Text>
          <Text>Tobi Bamidele (FullStack Dev) </Text>
          <Text>Mustapha Sani (FullStack Dev) </Text>
          <Text>Oselu (Product Design)</Text>
          <Text>Sharon Damisa (UX Research) </Text>
        </Text>
      </Section>
      <Section>
        <div>
          <Heading>PROBLEMS</Heading>
          <Text>
            According to the 2021 EfiNA report,{' '}
            <span>
              only 21% of women in the state have the final say on whether they
              can work to earn and income, compared with 87% men.
            </span>{' '}
            From research we identified some key issues preventing these women
            from adopting digital financial solutions.
          </Text>
          <ListWrapper>
            <li>
              <span>Trust</span> - Most of the women interviewed don't trust the
              banking system some feel they have no control over their money
              when put it in a bank, some have falling victims to scams and
              inexplainable bank charges. Most of this things contribute to them
              not trusting banks.Some of the women also feel USSD services are
              cheaper and safer.
            </li>
            <li>
              <span>Religion</span> - Religion is a consideration for some
              muslim women in kaduna who may be further restricted from owning
              DFS products without the support and approval of a male relative.
            </li>
            <li>
              <span>KYC[Know your customer] and onboarding</span> - Owning a
              bank account, which is frequently a requirement for Digital
              Financial Services(DFS), necessitates a certain level of KYC,
              including the need for not only an ID card but also a proof of
              address, typically a utility bill that is frequently in the name
              and custody of the man. As a result,by design, it is necessary to
              get the man's permission before opening an account.
            </li>
          </ListWrapper>
        </div>
      </Section>
      <Section>
        <div>
          <Heading>APPROACH</Heading>
          <Text>
            To come up with a solution we categorized the women into groups.{' '}
          </Text>
          <Text>
            <span>First Group</span> are those women that do little trading here
            and there and save with a thrift collector.
          </Text>
          <Text>
            <span>Second Group</span> are those that collect goods on credit and
            consistently pay back.
          </Text>
          <Text>
            <span>Third Group</span> are the ones that do weekly or monthly
            contribution within themselves and gather the money and give to one
            person at the end of each cycle. Porpularly known as "Adashe"
          </Text>

          <Text>
            For Each of these group we proposed a product. It is important to
            note that
            <Text
              style={{
                padding: '24px',
                background: '#f5f5f5',
                border: '1px solid #c0c0c0',
              }}
            >
              What we seek to do is not to just digitize the traditional
              processes the women are farmiliar with but most importantly build
              an infrastructure that collates the financial records of these
              women.The goal of the products is to get access to data that shows
              the financial habits and or history of the women which we then
              later expose to the outside world so that financial institutions,
              government organizations e.t.c can look at and give them access to
              credit(which is one of the tenets of financial inclusion and how
              we onboard them to the rest of the financial inclusion ecosystem).
              <span>
                {' '}
                We solve the trust,KYC, and religion issues using traditional
                methods the women are already farmiliar with, we simply
                digitized them.
              </span>
            </Text>
          </Text>
        </div>
        <Image src={Statement} alt="" style={{ marginTop: '32px' }} />
      </Section>
      {/* <Section>
        <div>
          <Heading>TIES TO FINANCIAL INCLUSION</Heading>
          <Text>
            Financial inclusion simply put, means bringing those who are
            currently not enjoying financial services such as savings, credit,
            payment, pensions, insurance, remittances amongst others into the
            financial system and by so doing, access and use such services for
            economic /other activities that better their lots.
          </Text>
          <Text>
            Access to credit which is one of the tenets of financial inclusion
            is how we onboard these women to the rest of the financial inclusion
            ecosystem.By making it easier for them to get access to credit we
            are automatically onboarding them to other aspects of financial
            inclusion like savings and payments. We eliminate the trust,KYC, and
            Religion barriers using methods the women are already used to.
          </Text>
        </div>
        
      </Section> */}

      <Section
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <Heading>OUR SOLUTIONS</Heading>
          <Heading2>ADASHE</Heading2>
          <Text>
            This solution(product) is based on a very popular financial system
            among unbanked women called 'Adashe'.Infact for most of them that is
            there primary saving method. It is a contribution system where the
            women pool money in groups and collect in turns. We digitised this
            process not just to make the process more efficient but also a means
            for us to achieve our goal of getting data that proves a record of
            payment habits and show their financial credibility and credit
            worthiness.
          </Text>
        </div>
        <div style={{ marginTop: '32px' }}>
          <Image
            src={Adashe1}
            alt=""
            style={{ transform: 'translateX(-30px)' }}
          />
          <Image
            src={Adashe2}
            alt=""
            style={{ transform: 'translateX(-20px)' }}
          />
        </div>
      </Section>
      <Section
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <Heading2>LENDER</Heading2>
          <Text>
            With Lender we are leveraging the system where market women or women
            who do business , collect goods on credit and pay back when they
            sell off the goods. This system is also very popular among unbanked
            women. With this, the lender is able to keep a record of people that
            collect goods on credit and when they eventually pay and we get to
            see how often in terms of duration and capability they are able to
            sell the borrowed goods and pay back, effectively proving their
            credit worthiness.
          </Text>
        </div>
        <div style={{ marginTop: '32px' }}>
          <Image
            src={Lender1}
            alt=""
            style={{ transform: 'translateX(-30px)' }}
          />
          <Image
            src={Lender2}
            alt=""
            style={{ transform: 'translateX(-30px)' }}
          />
        </div>
      </Section>
      <Section
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '24px',
          paddingBottom: '0',
        }}
      >
        <Heading>CONCLUSION </Heading>
        <Text>
          {' '}
          In summary, what we hope to achieve with DIFFTRACKA is to create a
          digital financial infrastructure that provides data for 3rd parties
          like Banks, NGOs, Researchers and goverments through the form of an
          API. This will foster financial inclusion for these women who wouldn’t
          normally have access to financial services.
        </Text>
      </Section>
      <Section
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '24px',
          paddingBottom: '0',
        }}
      >
        <Heading>FUTURE PLANS</Heading>
        <ListWrapper>
          <li>
            <Text>Wallet System</Text>
          </li>
          <li>
            <Text>
              A unique identifier that the women can use to access loans based
              on their credit score.
            </Text>
          </li>
          <li>
            <Text>
              {' '}
              Newer products that simulate other ways the women use money.
            </Text>
          </li>
        </ListWrapper>
      </Section>
      <Section
        style={{ display: 'flex', justifyContent: 'center', gap: '400px' }}
      >
        <NavLink
          style={{
            textDecoration: 'none',
            zIndex: '10',
            transform: 'translateX(-40px)',
          }}
          to="/easybit"
        >
          <Button>
            <img src={PreviousIcon} alt="" />

            <span>PREVIOUS PROJECT</span>
          </Button>
        </NavLink>
        <NavLink
          style={{ textDecoration: 'none', zIndex: '10' }}
          to="/incentive"
        >
          <Button>
            <span>NEXT PROJECT</span>

            <img src={NextIcon} alt="" />
          </Button>
        </NavLink>
      </Section>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
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
  background-color: #fffff;
  position: relative;
  overflow: hidden;
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
  color: #374af0;
  margin-top: 32px;
`;

const Bar = styled.div`
  height: 10px;
  width: 150px;
  background: #374af0;
  position: absolute;
`;
const HeroImage = styled.img`
  position: absolute;
  right: 150px;
  top: 10px;
`;
const Hero = styled.div`
  display: flex;
  gap: 96px;
  position: relative;
  margin-top: 80px;
  padding: 120px 100px 0px;
  height: 600px;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23374af0' fill-opacity='0.03'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
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
  padding: 50px 200px;
  /* display: flex;
  gap: 72px;
  align-items: center; */
`;
const Image = styled.img``;
const ListWrapper = styled.ul`
  margin-top: 16px;
  padding-left: 0;

  & li {
    font-family: 'FreightText', sans-serif;
    font-size: 20px;
    font-weight: 400;
    max-width: 800px;
    margin-top: 16px;
  }
  & span {
    font-weight: 800;
  }
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
  transform: translateX(120px);
  /* top: 450px; */
  & :hover {
    background: #121212;
    color: #ffffff;
  }
`;
const SlideLeftKey = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}
`;

const SlideLeft = styled.div`
  animation: ${SlideLeftKey} 2000ms;
`;
export default DiffCaseStudy;
