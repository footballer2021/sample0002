let quiz =[
	{question:'ギベリン（皇帝党，皇帝派）とゲルフ（教皇党，教皇派）とが争った。',correct:'〇'} ,
	{question:'イタリアは、オスマン帝国から，モロッコを獲得した。',correct:'×'} ,
	{question:'ミラノ勅令によって，ヴァチカン市国（ヴァティカン市国）の独立が認められた。',correct:'×'} ,
	{question:'中世のシャンパーニュ地方は，海運で繁栄した。',correct:'×'} ,
	{question:'清は，公行という特許商人の組合に貿易を管理させた。',correct:'〇'} ,
	{question:'扇動政治家（デマゴーゴス）出現防止のため，陶片追放の制度が定められた。',correct:'×'} ,
	{question:'イスラームの天文学を取り入れて，唐代の中国で，授時暦が作られた。',correct:'〇'} ,
	{question:'アギナルドが，革命軍を率いて，フィリピン共和国を樹立した。',correct:'〇'},
	{question:'マッツィーニが，両シチリア王国を占領した。',correct:'×'},
	{question:'バルトロメウディアスは，アフリカ南端の喜望峰に到達した。',correct:'〇'},
	{question:'古代インドで，戯曲『シャクンタラー』が，カーリダーサによって作られた。',correct:'〇'},
	{question:'班超が，部下の甘英をプトレマイオス朝に派遣した。',correct:'×'}
 ]
 
 //問題をランダムに並び替え 
 newQuiz = [];
 while (quiz.length > 0) {
   num = quiz.length;
   knum = Math.floor(Math.random() * num);
 
   newQuiz.push(quiz[knum]);
   quiz.splice(knum, 1);
 }
 
 const quizLength=newQuiz.length;
 let quizIndex=0;
 
 //問題文　上が定義、下が実行
 const setupQuiz=()=>{ document.getElementById('js-question').textContent= newQuiz[quizIndex].question;}
 setupQuiz();
 
 
 //正解数を表示 
 let quizcollect=0;
 const collectup=()=>{document.getElementById('js-cnumber').textContent=quizcollect+'/'+newQuiz.length;}
 collectup();
 
 //〇ボタン
 const $correctButton=document.getElementById('js-1bocchi');
 
 //×ボタン
 const $incorrectButton=document.getElementById('js-2bocchi');
 
 //ボタンを押したら正誤判定
 $correctButton.addEventListener('click',(e)=>{
	 if(newQuiz[quizIndex].correct===e.target.textContent){
		 window.alert('正解!');
		 quizcollect++;
	 }else{
		 window.alert('不正解!');
	 }
	  quizIndex++;
 
	  if(quizIndex<quizLength){
	  //問題数があればこちらを実行
	  setupQuiz();
	  }else{
	  //問題数がなければこちらを実行
	  window.alert('終了!');
	  }
	  collectup(); 
 });
 
 $incorrectButton.addEventListener('click',(e)=>{
	 if(newQuiz[quizIndex].correct===e.target.textContent){
		 window.alert('正解!');
		 quizcollect++;
	 }else{
		 window.alert('不正解!');
	 }
	 quizIndex++;
 
	  if(quizIndex<quizLength){
	  //問題数があればこちらを実行
	  setupQuiz();
	  }else{
	  //問題数がなければこちらを実行
	  window.alert('終了!');
	  }
	  collectup();// 
 });
 
 
