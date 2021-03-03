---
id: adv-02
title: 内部波形のシミュレーション
---

複雑な回路をシミュレーションする際、デフォルトで表示されるトップモジュールのinput, output以外に、各モジュールの内部信号をかんたんに調べることができます。

まず、シミュレーションまで進めます。
![sim](assets/adv/sim_internal_signals/sim.PNG)

左のScopeから探したい信号があるモジュールを選択し、その右のObjectsから必要な信号を選択したら、
右クリックをして `Add to Wave Window` を実行します。
![add_to_wave_window](assets/adv/sim_internal_signals/add_to_wave_window.PNG)

Wave Windowに信号が追加されました。
![wave_window](assets/adv/sim_internal_signals/wave_window.PNG)

最後に、<img src="/adv1a-fpga-tutorial/docs/assets/3_sim/button_relaunch_sim.png" alt="relaunch_sim_button" class="no_margin"> を押してリロードを行うことで、追加した信号の波形が表示されます。
![after_relaunch](assets/adv/sim_internal_signals/after_relaunch.PNG)

デバッグ時に有効活用しましょう。