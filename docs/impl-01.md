---
id: impl-01
title: 論理合成・レイアウトの実行
---
## 論理合成の実行
`Flow Navigator` => `SYNTHESIS` => `Run Synthesis` をクリック
![run_synth](assets/4_impl/4-1_run_synth.png)

`OK` をクリック
![launch_runs](assets/4_impl/4-2_launch_runs.png)

自動的に論理合成が行われる。ステータスは右上に表示される。  
設計によっては長時間かかるため、気長に待つこと。
![wait](assets/4_impl/4-3_wait.png)


## レイアウトの実行
論理合成にエラーがなければ、以下の画面が表示される。  
`Run Implementation` が選択されていることを確認し、`OK` を押すと、そのままレイアウトが行える。  
(`Implementation` = 配置配線、つまりレイアウトのこと)
![synth_comp](assets/4_impl/4-4_synth_comp.png)

または、`Flow Navigator` => `IMPLEMENTATION` => `Run Implementation` をクリック
![run_impl](assets/4_impl/4-5_run_impl.png)


## レイアウトデザインを開く
レイアウトにエラーがなければ、以下の画面が表示される。  
`Open Inplemented Design`が選択されていることを確認し、`OK`
![impl_comp](assets/4_impl/4-6_impl_comp.png)

または、`Flow Navigator` => `IMPLEMENTATION`  => `Open Implemented Design` をクリック
![open_impl_design](assets/4_impl/4-7_open_impl_design.png)

以下の画面が表示されればレイアウト完了
![impl_design](assets/4_impl/4-8_impl_design.png)

ただし、レイアウトを終えただけでは、まだ実機に実装することはできません。  
実機に実装するためには、
- クロックの設定
- LED、ボタン、スイッチなどの割り当て (ピンアサイン)

が必要となります。まず、クロックの設定を行いましょう。
