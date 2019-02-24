---
id: conf-02
title: FPGAへデータ転送
---
続いて、`Vivado` 上でコンフィグレーションを行い、FPGAにデータの転送を行います。
まず、`Basys3`をPCに接続し、電源を入れておきましょう。


## ビットストリームファイルの生成
`Flow Navigator` => `PROGRAM AND DEBUG` => `Generate Bitstream` をクリック
![gen_bitstream](assets/5_conf/5-1_gen_bitstream.png)

`OK` をクリック
![launch_runs](assets/5_conf/5-2_launch_runs.png)

生成が完了すると、以下の画面が表示される。
`Open Hardware Manager` を選択して、`OK` をクリック
![bitstream_gen_conp](assets/5_conf/5-3_bitstream_gen_comp.png)


## コンフィグレーションの実行
`Hardware Manager`を開くと、上部に緑色の帯が現れ、`Open target` が表示される  
`Open target` をクリックし、出てきたメニューから `Auto Connect` をクリック  
`Vivado` がPCに接続されたボードを自動的に検出し、接続まで行ってくれる
![open_target](assets/5_conf/5-4_open_target.png)

もし `Windows Defender` の画面が表示された場合、`アクセスを許可する` をクリック
![firewall](assets/5_conf/5-5_firewall.png)

無事接続できれば、以下の画面に変化する  
`Program Device` をクリック
![program_device_1](assets/5_conf/5-6_program_device.png)

`Bitstream file` のファイルパスは自動的に入力されている  
`Program` をクリックすれば、コンフィグレーションが行われる
![program_device_2](assets/5_conf/5-7_program_device.png)

これにて実機が動作を開始します。  
まずリセットボタン `BTNU` を一度押してから、仕様通りの動作をするか確認してみましょう。  
うまく動作しなかった場合は、画面下部の `Messages` タブのエラーメッセージをよく読みながら、デバッグを行いましょう。  
**動作を確認したら、コンフィグレーションリセットボタンを押すのを忘れずに！**

![fpga_btnu](assets/5_conf/fpga_btnu.jpg)

## `Hardware Manager`について
`Hardware Manager`が消えてしまった場合、`Open target` や `Program Device` は、画面下部の図の位置からも行える
![open_target](assets/5_conf/5-8_open_target.png)

