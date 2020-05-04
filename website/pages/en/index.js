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

    const BlockDescription = props => (
      <Container
        padding={['all']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const BlockUsage = props => (
      <Container
        padding={['all']}
        id={props.id}
        background="light">
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const BlockButton = props => (
      <Container
        padding={['all']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );


    const Information = () => (
      <div class="container lightBackground paddingAll"
        style={{textAlign: 'center'}}
        >
        <h2 className="mitigate-h2-margin">更新情報</h2>
        <div className="top-info-table">
          <table >
            <tbody>
              <tr>
                <td>2020/05/13</td>
                <td>Basic内にリモート授業に向けた注意点を記載しました。Basic, Advancedを加筆しました</td>
              </tr>
              <tr>
                <td>2019/05/08</td>
                <td>Basic - 最終課題の注意点 を公開しました</td>
              </tr>
              <tr>
                <td>2019/04/10</td>
                <td>Webサイトオープン</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );

    const Description = () => (
      <BlockDescription>
        {[
          {
            image: `${baseUrl}img/basys3.png`,
            imageAlign: 'left',
          },
          {
            title: 'FPGAを用いたLSIチップの設計演習用資料',
            content: 'CADツール(Vivado)を用いたFPGAの設計方法を理解するための補助教材です。\
            この教材を参考に、実際に手を動かしながら、LSIの設計方法を学習していきましょう。\
            わからないところがあったら質問するようにしましょう。'
          },
        ]}
      </BlockDescription>
    );

    const Usage = () => (
      <BlockUsage>
        {[
          {
            title: 'この教材の使い方',
            content: 'ブラウザの横幅を小さくして、開発ツールの隣に置くことで、この資料を見ながら作業することができます。<br> \
                      Internet Exproler ではレイアウトが崩れるため、Google Chrome か Firefox を利用してください。<br> \
                      これらのブラウザは、`スタートメニュー` => `すべてのプログラム` => `Internet_Network[ネットワーク]` にあります。',
          },
          {
            image: `${baseUrl}img/window_sample.png`,
            imageAlign: 'right',
          }
        ]}
      </BlockUsage>
    );

    const Intro = () => (
      <div class="container paddingAll"
        style={{textAlign: 'center'}}
        >
        <h2 class="mitigate-h2-margin">コンテンツ</h2>
        <p>
          「Basic」を参照し、授業課題を進めましょう。<br></br>
           基本的に「Basic」を参照すれば、課題に取り組むことができます。<br></br>
          「Advanced」では、よりツールを簡単に使う方法や、より踏み込んだ内容などを解説しています。<br></br>
          「Links」では、リファレンスやシラバスなどを紹介しています。<br></br>
        </p>
      </div>
    );


    const Features = () => (
      <BlockButton layout="threeColumn">
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
            imageLink: 'links'
          },
        ]}
      </BlockButton>
    );


    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />

          <Information />
          <Description />
          <Usage />
          <Intro />
          <Features />

      </div>
    );
  }
}

module.exports = Index;
