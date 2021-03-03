---
id: conf-remote
title: 設計データの生成と保存
---
<div class="alert alert-danger">
<strong>こちらではリモート演習の場合のコンフィグレーション手順を示しています。オフライン演習の場合は、<a href="/adv1a-fpga-tutorial/docs/conf-01">こちら</a>へ進んでください。 </strong><br>
</div>

続いて、`Vivado` 上でコンフィグレーションを行い、FPGAに転送するためのデータを作成します。

## ビットストリームファイルの生成
`Flow Navigator` => `PROGRAM AND DEBUG` => `Generate Bitstream` をクリック
![gen_bitstream](assets/5_conf/5-1_gen_bitstream.png)

`OK` をクリック
![launch_runs](assets/5_conf/5-2_launch_runs.png)

生成が完了すると、以下の画面が表示される。
`Open Hardware Manager` を選択して、`OK` をクリック
![bitstream_gen_conp](assets/5_conf/5-3_bitstream_gen_comp.png)

## 設計データの保存
最後に、生成した設計データを保存しましょう。  
`File` => `Export` => `Export Bitstream File...`
![save_bitstream_file](assets/5_conf/5-r1_save_bitstream_file.PNG)

`File name`に適当なファイル名を入力し、`Save`  
この時、保存したフォルダを覚えておくこと。  
デフォルトではVivadoフォルダの各プロジェクトの直下に保存される。  
(画像では `Z:/Vivado/counter`)
![save_bit_window](assets/5_conf/5-r2_save_bit_window.PNG)

以下の画面が表示されたら、保存完了。OKを押す。
![export_success](assets/5_conf/5-r3_export_success.PNG)

エクスプローラーで先程のフォルダを探すと、`.bit` というファイルがある。  
これが設計データ(Bitstream File)なので、このファイルを送信すればOKです。
![explorer](assets/5_conf/5-r4_explorer.PNG)