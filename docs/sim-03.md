---
id: sim-03
title: 波形操作
---
波形操作ウィンドウでは、`シミュレータコントローラ`と、`波形ウィンドウコントローラ`の2種類のコントローラを用いて、回路の出力結果の表示を操作することができます。  
それぞれ、代表的なボタンについてのみ説明します。
![wave_1](assets/3_sim/3-15_wave_control.png)


## シミュレータコントローラ
|ボタン|説明|
|:-:|:-|
|![restart](assets/3_sim/button_restart.png)|シミュレーションをリセットし、現在の波形を消去する|
|![run_all](assets/3_sim/button_run_all.png)|シミュレーションを実行する<br>(`$finish`が現れたら、シミュレーションを停止する)|
|![run_step](assets/3_sim/button_run_step.png)|右側のボックスで指定した秒数分だけ、シミュレーションを実行する|
|![pause](assets/3_sim/button_pause.png)|シミュレーションを一時停止する<br>(`$finish`を書かなかった時などに使用する)|
|![relaunch_sim](assets/3_sim/button_relaunch_sim.png)|ソースを読み込み直して、シミュレーションを実行する<br>RTL記述やテストフィクスチャを修正した時は、このボタンを使うと良い|


## 波形ウィンドウコントローラ
|ボタン|説明|
|:-:|:-|
|![zoom_up](assets/3_sim/button_zoom_in.png)|波形の時間軸をを拡大する。より細かい部分の波形が見られるようになる|
|![zoom_out](assets/3_sim/button_zoom_out.png)|波形の時間軸を縮小する。より広い範囲の波形が見られるようになる|
|![zoom_fit](assets/3_sim/button_zoom_fit.png)|生成した波形全体を表示する<br>波形を生成した直後や、位置がわからなくなった際に使用すると良い。|
|![go_to_cursol](assets/3_sim/button_go_to_cursol.png)|画面をカーソルが中央になるようにに移動させる<br>カーソルは黄色の線で表される|
|![go_to_start](assets/3_sim/button_go_to_start.png)|カーソルを波形の先頭 (時間=0) の位置に移動させる|
|![go_to_last](assets/3_sim/button_go_to_last.png)|カーソルを波形の終端の位置に移動させる|
|![previous_transition](assets/3_sim/button_previous_transition.png)|特定の波形を選択している時、<br>カーソルを前の立ち上がりエッジまたは立ち下がりエッジに移動させる|
|![next_transition](assets/3_sim/button_next_transition.png)|特定の波形を選択している時、<br>カーソルを次の立ち上がりエッジまたは立ち下がりエッジに移動させる|


## 波形部分の16進表記の変更
波形の `Value` の表示は、デフォルトで16進表記になっている。  
一方、加算などを実行した際などは、2進数や10進数で表示された方が見やすい。  

変更するには、表示を変えたい波形の `Name` の部分を右クリックし、  
`Radix` の中から好きな表示を選べばよい。

![wave-2](assets/3_sim/3-16_wave_radix.png)