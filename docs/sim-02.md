---
id: sim-02
title: シミュレーションの実行
---
テストフィクスチャの作成が完了したら、以下の写真のように、テストフィクスチャと確認したい回路が入れ子のような状態で表記されているか確認する  
(入れ子のようになっていない場合、テストフィクスチャを右クリック => `Set as Top`  
 それでも入れ子にならない場合、テストフィクスチャの記述が間違っている可能性がある)
![set_top_module](assets/3_sim/3-11_set_top_module.png)

`Messages` パネルにエラーがないことを確認したら、  
`Flow Navigator` => `SIMULATION` => `Run Simulation` をクリックし、  
`Run Behavioral Simulation` をクリック
![run_sim_1](assets/3_sim/3-12_run_sim.png)

以下のように画面が変わったら、波形を最大化するために `□` ボタンをクリック
![run_sim_2](assets/3_sim/3-13_run_sim.png)

以下のように、波形ウインドウが大きく表示されていればOK  
波形の操作に関しては次のセクションを参照
![wave](assets/3_sim/3-14_wave_maximize.png)