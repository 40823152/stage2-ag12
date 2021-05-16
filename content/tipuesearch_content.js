var tipuesearch = {"pages": [{'title': 'About', 'text': '組員 \n \xa0 40823152 repo \xa0 | \xa0 40823152 site \xa0 | \n \xa0 40823153 repo \xa0 | \xa0 40823153 site \xa0 | \n \xa0 40823125 repo \xa0 | \xa0 40823125 site \xa0 | \n \xa0 40823110 repo \xa0 | \xa0 40823110 site \xa0| \n \n', 'tags': '', 'url': 'About.html'}, {'title': '2人小組', 'text': '', 'tags': '', 'url': '2人小組.html'}, {'title': 'ag21-籃球機', 'text': '一代版本四 \n 籃球機 4 \n coppeliaSim模擬:版本4 \n 因為版本2在 coppeliaSim裡被自動放大10倍，所以版本3無法擊中籃框，所以在 coppeliaSim裡 版本4放大10後就能擊中籃框。 \n \n \n <<<<<<< HEAD \n 因為版本2在 coppeliaSim裡被自動放大10倍，所以版本3無法擊中籃框，所以版本4放大10後就能擊中籃框。 \n 可調性 \n \n \n \n \n \n \n', 'tags': '', 'url': 'ag21-籃球機.html'}, {'title': '檢討', 'text': '1.球進入籃框後回到擊球處的路徑不穩。 \n 2.擊球桿只能轉動，無法控制出擊時間。 \n 3.簡報內容不詳細 \n 4.沒有理論依據 \n \n 解決方法: \n 1.要新增球軌道的循環系統 \n 2.使用lua控制軸 \n 3.要有針對內容去延伸介紹為什麼要這麼做 \n 4.使用數學得正答案。 如:使用能量守恆去計算速度和高度。 \n', 'tags': '', 'url': '檢討.html'}, {'title': 'ag14-發球機', 'text': 'https://40823125.github.io/stage1-ag14/ \n \n', 'tags': '', 'url': 'ag14-發球機.html'}, {'title': '4人小組', 'text': '\n \n', 'tags': '', 'url': '4人小組.html'}, {'title': '產品目標', 'text': '主題:籃球機 二代 \n \n 動機: \n 第一次小組產品的籃球機只能自己轉動無法控制，所以二代的籃球機目標增加案件控制轉動。 \n \n 製作規劃: \n w5:確認主題，工作分配 \n \n w6:尋找lua程式與 coppeliaSim 文章 ，並且使用lua程式控制軸在coppeliaSim裡模擬，籃球機外觀修整。 \n \n w7:完成按鍵控制程式與模擬 ，籃球機外觀修整。 \n \n w8:除錯與修整，完成簡報與pdf \n \n w9:報告 \n', 'tags': '', 'url': '產品目標.html'}, {'title': 'coppeliaSim模擬', 'text': '', 'tags': '', 'url': 'coppeliaSim模擬.html'}, {'title': 'Lua control speed', 'text': '使用Lua程式控制coppeliaSim擊球桿的轉速 \n \n \n', 'tags': '', 'url': 'Lua control speed.html'}, {'title': 'keyboard control', 'text': '使用Lua程式寫出可以由鍵盤按鈕控制coppeliaSim的擊球桿 \n \n', 'tags': '', 'url': 'keyboard control.html'}, {'title': 'Inquire keyboard number', 'text': "查詢keyboard按鍵 \n \n \n \n \n \n \n 1 \n 2 \n \n \n \n print (auxiliaryData[1]) \n \xa0\xa0\xa0\xa0\xa0\xa0 if   (auxiliaryData[1]== string.byte ( ' ' ))  then \n \n \n \n \n \n \n \n \n 介紹: \n 可以查詢鍵盤代碼 \n \n \n", 'tags': '', 'url': 'Inquire keyboard number.html'}, {'title': 'Lua keyboard Turn back', 'text': '擊球桿新增後轉功能，可以有效控制擊球的時機。 \n \n', 'tags': '', 'url': 'Lua keyboard Turn back.html'}, {'title': 'Heroku 網站建立', 'text': 'stage2-ag12-heroku網站 \n 1.開通 Heroku 帳號(用學校email建立) \n 2.建立一個 Herokuapp \n \n 3.從\xa0 http://a.kmol.info:88/heroku.7z \xa0下載 Heroku cli 程式檔案, 解開至隨身碟 Y:\xa0 \n \n 4.修改隨身系統的啟動批次檔案start.bat: \n \n 5.測試是否能夠在修改後的命令列中執行 heroku.exe, 輸入 heroku version 若回應所使用的版本表示上述路徑設定已經成功 \n \n 6.有proxy的話，需要 在 start_ipv6.bat 中加入: \n REM for heroku login\nset HTTP_PROXY=http://[2001:288:6004:17::53]:3128\nset HTTPS_PROXY=http://[2001:288:6004:17::53]:3128\n \n 7. 針對利用 Heroku 同步 Github Pages 上的網站內容 \n \n 8. \n # 以 interactive 模式登入 Heroku, 完成後產生 y:\\home_ipv6\\_netrc\nheroku login -i\n# 針對已經登入的 Heroku 帳號下的 app, 設為此倉儲的 remote 同步倉儲, 且在倉儲中會自建名稱為 heroku 的 remoate site.\nheroku git:remote -a 名稱 \n \n', 'tags': '', 'url': 'Heroku 網站建立.html'}, {'title': 'Error\xa0exclude', 'text': '協同錯誤 \n 在協同時因為組員們的倉儲版本不同導致無法推送 \n \n 最後我們只好將版本不同的倉儲刪掉重新協同 \n', 'tags': '', 'url': 'Error\xa0exclude.html'}, {'title': '籃球機', 'text': '參考資料 \n coppeliaSim Lua 1 \n coppeliaSim Lua 2 \n', 'tags': '', 'url': '籃球機.html'}, {'title': '版本一', 'text': '籃球機 1.4 \n coppeliaSim模擬:版本1.4 \n 因為版本2在 coppeliaSim裡被自動放大10倍，所以版本3無法擊中籃框，所以在 coppeliaSim裡 版本4放大10後就能擊中籃框。 \n \n \n 因為版本2在 coppeliaSim裡被自動放大10倍，所以版本3無法擊中籃框，所以版本4放大10後就能擊中籃框。 \n 可調性 \n \n \n \n \n', 'tags': '', 'url': '版本一.html'}, {'title': '版本二', 'text': '', 'tags': '', 'url': '版本二.html'}, {'title': '2.1', 'text': '籃球機2.1 \n 設計緣由:想藉由曲柄連桿擊打球,方便coppeliaSim模擬與修正 \n \n 連桿機構的特點： \n 優點：運動副單位面積所受的壓力小且面接觸受力小，便於潤滑，磨損小；製造方便。 \n 缺點：設計複雜誤差大。工作效率低。 \n \n 原文網址： https://kknews.cc/news/3l5m3ey.html \n \n 主要問題: \n 1.過於簡陋 \n 2.擊球桿會撞到基座 \n 改善方法: \n 1.擊球桿的形狀 \n 2.滑塊的距離縮短 \n', 'tags': '', 'url': '2.1.html'}, {'title': '2.2', 'text': '籃球機2.2 \n 無框版 \n 設計緣由: \n 1.想將擊球點角度提高,所以將擊球桿形狀設計的像車刀一樣。 \n 2.為了讓擊球時滑塊的支點不會滑動,而且球掉落在頂端時有停頓的時間 \n \n \n \n \n \n 主要問題: \n 1.滑塊會撞到曲柄 \n 改善方法: \n 1.擊球桿改為直的 \n 有框版 \n 設計緣由:為了讓滑塊不會撞到曲柄,所以將擊球桿改為直的 \n \n \n 主要問題: \n 1.球模擬時不一定是直線 \n 改善方法: \n 1.所以將斜坡面積變大 \n', 'tags': '', 'url': '2.2.html'}, {'title': '2.3', 'text': '籃球機2.3 \n 設計緣由: \n 1.為了確定可以完整的接到球,所以將斜坡面積變大 \n 2.為了讓滑塊不會撞到曲柄,所以改為曲柄滑塊機構 \n \n \n 主要問題: \n 1.斜面的接球太斜而且不夠深,會導致球掉出來 \n 2.CoppeliaSim v-rep 連桿運動問題 \n 一開始在CoppeliaSim上模擬發現模型無法順利地運轉 \n \n 改善方法: \n 1.將斜面挖深,並且將斜面改為單斜而不是曲型 \n 2.CoppeliaSim v-rep 連桿運動問題 解決 \n 後來才發現原來是尺寸的問題 \n 由於coppliasim對與尺寸可能無法到inventor那麼精準所以要預留空隙,才能順利運轉 \n \n \n \n \n', 'tags': '', 'url': '2.3.html'}, {'title': '2.4', 'text': '籃球機2.4 \n 2.4.1 \n 設計緣由: \n 1.為了確定可以完整的接到球,所以將斜坡面積挖深並改為單斜面 \n 2.為了滑動流暢將滑塊改為圓形 \n 3.想將擊球點角度提高,所以將擊球桿的擊球面設計為平面 \n \n \n 主要問題: \n 1.擊球時,球無法順利擊飛 \n 改善方法: \n 1.將擊球桿的擊球面改為曲型 \n 2.4.2 \n 設計緣由:為了讓球順利擊飛,所以將擊球桿的擊球面改為曲型 \n \n \n', 'tags': '', 'url': '2.4.html'}, {'title': '協同報告', 'text': '2021-協同產品設計實習-stage2-ag12.pdf \n \xa0 \n', 'tags': '', 'url': '協同報告.html'}]};