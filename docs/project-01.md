---
id: project-01
title: プロジェクトの作成
---
## 起動画面からのプロジェクト作成
`Vivado`を起動した状態から、新しいプロジェクトを作成します。  
プロジェクトは、設計単位ごとに新しい物を作成した方が良いです。  
課題ごとに新しいプロジェクトを作成するように意識しましょう。


### 1. `Quick Start => Create Project` をクリック
![quick_start](assets/1_project/1-1_quick_start.png)


### 2. `Next` をクリック
![new_project](assets/1_project/1-2_new_project.png)


### 3. プロジェクト名の設定

- `Project name` は先頭にアルファベットが来るような名前にすること
- `Project Location` は、ローカルディスクではなくMyVolumeを指定すること  
さらに、MyVolume上に `Vivado` というディレクトリを作成すること  
以下の図ではMyVolumeが `Z` なので、 `Z:/Vivado` を指定している
- `Create project subdirectory` にチェックを入れる
- 入力が終わったら、`Next` をクリック

![project_name](assets/1_project/1-3_project_name.png)


### 4. プロジェクトタイプの設定

- `RTL Project` をチェック
- `Do not specify sources at this time` をチェック
- `Next` をクリック

![project_type](assets/1_project/1-4_project_type.png)


### 5. FPGAのデータ入力

まずフィルターをかける
- `Package` を `cpg236` にセット
- `Family` を `Artix-7` にセット
- `Speed` を `-1` にセット

フィルターに従ってリストが更新されるので、`xc7a35tcpg236-1` を選択して、`Next` をクリック

![default_part](assets/1_project/1-5_default_part.png)


### 6. プロジェクトのサマリーを確認

サマリーを確認して、`Finish` をクリック

![summary](assets/1_project/1-6_new_project_summary.png)


### 7. 作成完了

以下の画面が出てくればOK

![ready](assets/1_project/1-7_ready.png)


## メイン画面からのプロジェクト作成

`File => Project => New...` をクリックすると、[2. Next をクリック](#2-next-をクリック) から同様の手順でプロジェクトが作成できます。


![new_project](assets/1_project/1-8_new_project.png)