/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const BlockLeft = props => (
      <Container
        padding={['left', 'right']}
        id={props.id}
        background="light">
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const BlockCenter = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Description = () => (
      <BlockLeft id="index_desc">
        {[
          {
            content: 'CADツール(Vivado)を用いたFPGAの設計方法を理解するための補助教材です。\
                      この教材を参考に、実際に手を動かしながら、LSIの設計方法を学習していきましょう。\
                      わからないところがあったら質問するようにしましょう。',
            image: `${baseUrl}img/basys3.png`,
            imageAlign: 'left',
            title: 'FPGAを用いたLSIチップの設計演習用資料',
          },
        ]}
      </BlockLeft>
    );


    const Intro = () => (
      <div
        className="paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>この教材の使い方</h2>
        <p class="index_intro">
          「Basic」を参照し、授業課題を進めましょう。<br></br>
           基本的に「Basic」を参照すれば、課題に取り組むことができます。<br></br>
          「Advanced」では、よりツールを簡単に使う方法や、より踏み込んだ内容などを解説しています。<br></br>
          「Help」では、リファレンスなどを紹介しています。<br></br>
        </p>
      </div>
    );


    const Features = () => (
      <BlockCenter layout="threeColumn">
        {[
          {
            image: `${baseUrl}img/basic.svg`,
            imageAlign: 'top',
            imageLink: 'docs/intro-01'
          },
          {
            image: `${baseUrl}img/advanced.svg`,
            imageAlign: 'top',
            imageLink: 'docs/adv-01'
          },
          {
            image: `${baseUrl}img/help.svg`,
            imageAlign: 'top',
            imageLink: 'help'
          },
        ]}
      </BlockCenter>
    );


    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />

          <Description />
          <Intro />
          <Features />

      </div>
    );
  }
}

module.exports = Index;
