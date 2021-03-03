# 高度情報演習1A FPGA開発チュートリアル

## チュートリアルの編集 on docker
現在の宇佐美研webサイトでは、このチュートリアルはサブディレクトリ`/adv1a-fpga-tutorial/`で動作中。
ただし、そのままlocalhostでdocusaurusを立ち上げてしまうと、`siteConfig.js`で行っているサブディレクトリ指定のせいでブラウザからうまくアクセスできない。
そこで、dockerでnginxサーバーを立てて、本番環境のように`/adv1a-fpga-tutorial/`というサブディレクトリでアクセスできるようにした。
以下の手順に沿うことでローカルで開発できるはず。

``` sh
$ docker-compose build
Building docusaurus
...
Successfully built fe7d18895c62
Successfully tagged adv1a_fpga_tutorial_docusaurus:latest
```

Successfullyがでたら、imagesをみてきちんと立ち上がっているかどうか確認
``` sh
$ docker images
REPOSITORY                       TAG       IMAGE ID       CREATED         SIZE
adv1a_fpga_tutorial_docusaurus   latest    fe7d18895c62   3 minutes ago   857MB
```

そのあと起動
``` sh
$ docker-compose up
Creating network "adv1a_fpga_tutorial_default" with the default driver
Creating adv1a_fpga_tutorial_docusaurus_1 ... done
Attaching to adv1a_fpga_tutorial_docusaurus_1
docusaurus_1  | yarn run v1.6.0
docusaurus_1  | warning package.json: No license field
docusaurus_1  | $ docusaurus-start
docusaurus_1  | Browserslist: caniuse-lite is outdated. Please run next command `yarn upgrade caniuse-lite browserslist`
docusaurus_1  | LiveReload server started on port 35729
docusaurus_1  | Docusaurus server started on port 3000
```

ここまできたら、ブラウザで `http://localhost:3000/adv1a-fpga-tutorial/` を開くことで表示されるはず。
終わりたかったら `Ctrl + C` とかそんな感じで終われるはず。
デタッチモードで起動してコンテナに入りたいとか、そういうDockerにまつわるいろいろな話は調べてみてください。

