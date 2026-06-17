const TODAY_KEY = 'hana_furu_today_v1';
const HISTORY_KEY = 'hana_furu_history_v1';
const MAX_HISTORY_ITEMS = 7;

const flowerOracles = [
  { flowerName: 'White Camellia', flowerNameJa: '白椿', omenType: 'Small Blessing', omenTypeJa: '小さな祝福', message: 'A quiet kindness is waiting where you stopped looking.', messageJa: '探すのをやめた場所で、静かな優しさが待っています。', meaning: 'You may be carrying something silently. It does not need to be solved all at once.', meaningJa: 'あなたは何かを静かに抱えているのかもしれません。すべてを一度に解決しなくても大丈夫です。', smallAction: 'Make one warm drink and hold it with both hands.', smallActionJa: '温かい飲み物を作って、両手で包むように持ってください。', luckyItem: 'A white cup', luckyItemJa: '白いカップ', warning: 'Do not mistake exhaustion for failure.', warningJa: '疲れていることを、失敗だと勘違いしないでください。' },
  { flowerName: 'Moonlit Sakura', flowerNameJa: '月夜の桜', omenType: 'Gentle Change', omenTypeJa: 'やさしい変化', message: 'Something beautiful may leave, but not everything lost becomes empty.', messageJa: '美しいものが去っても、失われた場所がすべて空になるわけではありません。', meaning: 'A small ending can make room for a softer beginning.', meaningJa: '小さな終わりは、やわらかな始まりのための余白を作ります。', smallAction: 'Put away one thing that no longer belongs to today.', smallActionJa: '今日にはもう似合わないものを、ひとつ片づけてください。', luckyItem: 'A pale pink object', luckyItemJa: '淡い桃色のもの', warning: 'Do not chase what is already becoming memory.', warningJa: 'もう思い出になりかけているものを、追いかけすぎないでください。' },
  { flowerName: 'Temple Chrysanthemum', flowerNameJa: '寺の菊', omenType: 'Hidden Strength', omenTypeJa: '隠れた強さ', message: 'You are steadier than your mood is willing to admit.', messageJa: '気分が認めたがらないほど、あなたは本当は落ち着いています。', meaning: 'Today favors patience, simple order, and quiet dignity.', meaningJa: '今日は、忍耐とささやかな整え、静かな品位が味方します。', smallAction: 'Clean one small surface.', smallActionJa: '小さな面をひとつ、きれいに拭いてください。', luckyItem: 'Fresh water', luckyItemJa: '新しい水', warning: 'Avoid people who treat your patience like public property.', warningJa: 'あなたの忍耐を、誰のものでもあるように扱う人からは少し離れてください。' },
  { flowerName: 'Night Iris', flowerNameJa: '夜の杜若', omenType: 'Quiet Warning', omenTypeJa: '静かな注意', message: 'A closed door may be protecting your sleep.', messageJa: '閉じた扉が、あなたの眠りを守っているのかもしれません。', meaning: 'Not every delay is an insult. Some pauses keep your spirit intact.', meaningJa: 'すべての遅れが拒絶ではありません。魂を傷つけないための間もあります。', smallAction: 'Leave one message unanswered until you feel clear.', smallActionJa: '心が澄むまで、返事をひとつ保留にしてください。', luckyItem: 'A dark blue cloth', luckyItemJa: '濃い青の布', warning: 'Do not explain yourself to someone committed to misunderstanding.', warningJa: '誤解すると決めている人に、自分を説明し続けないでください。' },
  { flowerName: 'Gold Osmanthus', flowerNameJa: '金木犀', omenType: 'Small Blessing', omenTypeJa: '小さな祝福', message: 'A small sweetness will travel farther than expected.', messageJa: '小さな甘さが、思ったより遠くまで届きます。', meaning: 'Gentle words and ordinary care may change the shape of the day.', meaningJa: 'やさしい言葉と日々の気遣いが、一日の形を変えるかもしれません。', smallAction: 'Send one sincere thank-you.', smallActionJa: '心からのありがとうを、ひとつ届けてください。', luckyItem: 'Citrus peel', luckyItemJa: '柑橘の皮', warning: 'Do not hide warmth because someone once wasted it.', warningJa: '誰かがその温かさを粗末にしたからといって、隠してしまわないでください。' },
  { flowerName: 'Rain Lily', flowerNameJa: '雨百合', omenType: 'Gentle Change', omenTypeJa: 'やさしい変化', message: 'What looked empty may answer after the rain.', messageJa: '空っぽに見えたものが、雨のあとで返事をくれるかもしれません。', meaning: 'Your patience is not motionless; it is quietly rooting.', meaningJa: 'あなたの待つ時間は止まっていません。静かに根を張っています。', smallAction: 'Water a plant or rinse a cup slowly.', smallActionJa: '植物に水をあげるか、カップをゆっくりすすいでください。', luckyItem: 'Clear glass', luckyItemJa: '透明なグラス', warning: 'Do not demand a flower from a seed.', warningJa: '種に向かって、今すぐ花を求めないでください。' },
  { flowerName: 'Plum Blossom', flowerNameJa: '梅の花', omenType: 'Hidden Strength', omenTypeJa: '隠れた強さ', message: 'You can bloom before the air becomes kind.', messageJa: '空気がやさしくなる前に、あなたは咲くことができます。', meaning: 'A difficult season has taught you practical courage.', meaningJa: '厳しい季節は、暮らしに根ざした勇気をあなたに教えました。', smallAction: 'Step outside for three slow breaths.', smallActionJa: '外へ出て、ゆっくり三度息をしてください。', luckyItem: 'A folded note', luckyItemJa: '折りたたんだメモ', warning: 'Do not call your resilience ordinary.', warningJa: 'あなたのしなやかさを、当たり前のものと呼ばないでください。' },
  { flowerName: 'Red Spider Lily', flowerNameJa: '彼岸花', omenType: 'Quiet Warning', omenTypeJa: '静かな注意', message: 'Some paths glow because they are meant to be passed, not followed.', messageJa: 'いくつかの道は、進むためではなく通り過ぎるために光ります。', meaning: 'A tempting old pattern may appear with a softer face.', meaningJa: '懐かしい癖が、やさしい顔をして戻ってくるかもしれません。', smallAction: 'Name one boundary before evening.', smallActionJa: '夕方までに、境界線をひとつ言葉にしてください。', luckyItem: 'Red thread', luckyItemJa: '赤い糸', warning: 'Do not return to what made you disappear.', warningJa: 'あなたを消してしまった場所へ、戻らないでください。' },
  { flowerName: 'Wisteria at Dusk', flowerNameJa: '夕藤', omenType: 'Gentle Change', omenTypeJa: 'やさしい変化', message: 'Let support arrive in a form you did not design.', messageJa: '思い描いた形でなくても、支えが届くことを許してください。', meaning: 'You do not need to hold every beam by yourself.', meaningJa: 'すべての梁を、ひとりで支える必要はありません。', smallAction: 'Ask for one small, specific help.', smallActionJa: '小さく具体的な助けを、ひとつ頼んでください。', luckyItem: 'A hanging key', luckyItemJa: '吊るした鍵', warning: 'Do not confuse solitude with proof that no one cares.', warningJa: 'ひとりでいることを、誰にも大切にされていない証拠にしないでください。' },
  { flowerName: 'Lotus Lantern', flowerNameJa: '蓮灯り', omenType: 'Hidden Strength', omenTypeJa: '隠れた強さ', message: 'Your calm place still exists beneath the stirred water.', messageJa: '波立つ水の下にも、あなたの静かな場所はまだあります。', meaning: 'Feelings may ripple, but they do not have to command your hands.', meaningJa: '感情は揺れても、あなたの手を支配しなくてよいのです。', smallAction: 'Sit quietly for five minutes without fixing anything.', smallActionJa: '何も直そうとせず、五分だけ静かに座ってください。', luckyItem: 'A candle or lamp', luckyItemJa: 'ろうそく、または灯り', warning: 'Do not make permanent choices in a temporary storm.', warningJa: '一時の嵐の中で、永く残る決断をしないでください。' },
  { flowerName: 'Snowdrop', flowerNameJa: '待雪草', omenType: 'Small Blessing', omenTypeJa: '小さな祝福', message: 'A tiny sign of return is enough for today.', messageJa: '戻りはじめた小さなしるしだけで、今日は十分です。', meaning: 'Progress may arrive as a whisper rather than a gate opening.', meaningJa: '進歩は門が開く音ではなく、ささやきとして訪れることがあります。', smallAction: 'Write down one thing that is better than before.', smallActionJa: '前よりよくなったことを、ひとつ書いてください。', luckyItem: 'A silver coin', luckyItemJa: '銀色の硬貨', warning: 'Do not overlook small mercy because it is small.', warningJa: '小さいからといって、小さな恵みを見落とさないでください。' },
  { flowerName: 'Peony Shadow', flowerNameJa: '牡丹の影', omenType: 'Quiet Warning', omenTypeJa: '静かな注意', message: 'Beauty does not need to be offered to every passing eye.', messageJa: '美しさは、通りすがりのすべての目に差し出さなくてもよいものです。', meaning: 'Your energy is precious, and privacy can be a form of grace.', meaningJa: 'あなたの力は大切です。内緒にすることも、優雅さのひとつです。', smallAction: 'Keep one plan to yourself for now.', smallActionJa: '今は予定をひとつ、自分の中にしまっておいてください。', luckyItem: 'A closed book', luckyItemJa: '閉じた本', warning: 'Do not perform your tenderness for applause.', warningJa: '拍手のために、あなたのやさしさを演じないでください。' },
  { flowerName: 'Bellflower', flowerNameJa: '桔梗', omenType: 'Small Blessing', omenTypeJa: '小さな祝福', message: 'A sincere voice will carry through the evening air.', messageJa: '誠実な声は、夕べの空気を通って届きます。', meaning: 'Truth spoken gently can travel without force.', meaningJa: 'やわらかく話された真実は、力まずに遠くへ行けます。', smallAction: 'Say the simple version of what you mean.', smallActionJa: '伝えたいことを、飾らずに言ってください。', luckyItem: 'A blue pen', luckyItemJa: '青いペン', warning: 'Do not decorate a no until it becomes a maybe.', warningJa: 'いいえを飾りすぎて、たぶんに変えてしまわないでください。' },
  { flowerName: 'Magnolia Moon', flowerNameJa: '木蓮の月', omenType: 'Hidden Strength', omenTypeJa: '隠れた強さ', message: 'Your softness has survived more than noise ever could.', messageJa: 'あなたのやわらかさは、どんな騒がしさよりも長く生き延びてきました。', meaning: 'There is power in remaining tender without becoming available to harm.', meaningJa: '傷つけられるためではなく、やさしいままでいることには力があります。', smallAction: 'Touch something smooth and breathe out slowly.', smallActionJa: 'なめらかなものに触れて、ゆっくり息を吐いてください。', luckyItem: 'A cream-colored stone', luckyItemJa: '生成り色の石', warning: 'Do not let urgency borrow your peace.', warningJa: '急かす声に、あなたの平穏を貸さないでください。' },
  { flowerName: 'Hydrangea Mist', flowerNameJa: '紫陽花の霧', omenType: 'Gentle Change', omenTypeJa: 'やさしい変化', message: 'Your heart may change color without betraying itself.', messageJa: '心は、自分を裏切らずに色を変えることがあります。', meaning: 'Mixed feelings are still honest feelings.', meaningJa: '混ざり合った気持ちも、正直な気持ちです。', smallAction: 'Make a list with two true things on it.', smallActionJa: '本当のことを二つだけ、紙に書いてください。', luckyItem: 'Rain sounds', luckyItemJa: '雨音', warning: 'Do not force clarity before it has gathered.', warningJa: '澄みきる前のものに、無理に答えを出させないでください。' },
  { flowerName: 'Gardenia Smoke', flowerNameJa: '梔子の煙', omenType: 'Small Blessing', omenTypeJa: '小さな祝福', message: 'A hidden kindness may become fragrant after it passes.', messageJa: '隠れた親切は、通り過ぎたあとで香りはじめるかもしれません。', meaning: 'You may not see the effect of your care right away.', meaningJa: 'あなたの気遣いの行き先は、すぐには見えないかもしれません。', smallAction: 'Do one helpful thing without announcing it.', smallActionJa: '知らせずに、役に立つことをひとつしてください。', luckyItem: 'Clean linen', luckyItemJa: '清潔なリネン', warning: 'Do not measure goodness only by being noticed.', warningJa: '気づかれることだけで、善さを測らないでください。' },
  { flowerName: 'Violet Prayer', flowerNameJa: '菫の祈り', omenType: 'Hidden Strength', omenTypeJa: '隠れた強さ', message: 'A modest wish can still reach the rafters.', messageJa: '控えめな願いも、梁の上まで届くことがあります。', meaning: 'Hope does not need to be loud to be alive.', meaningJa: '希望は、生きているために大きな声を出す必要はありません。', smallAction: 'Write a wish on scrap paper and fold it once.', smallActionJa: '紙切れに願いを書き、一度だけ折ってください。', luckyItem: 'Something purple', luckyItemJa: '紫色のもの', warning: 'Do not mock your own longing.', warningJa: '自分の願いを、笑わないでください。' },
  { flowerName: 'Narcissus Pond', flowerNameJa: '水仙の池', omenType: 'Quiet Warning', omenTypeJa: '静かな注意', message: 'Look softly, but do not fall into your reflection.', messageJa: 'やさしく見つめてください。でも、自分の影に落ちこまないで。', meaning: 'Self-examination is useful until it becomes a maze.', meaningJa: '自分を見つめることは、迷路になるまでは役に立ちます。', smallAction: 'Do one task that brings you back to the room.', smallActionJa: '今いる部屋へ戻ってこられる用事を、ひとつしてください。', luckyItem: 'A shallow bowl', luckyItemJa: '浅い器', warning: 'Do not turn every feeling into a verdict.', warningJa: 'すべての感情を、判決に変えないでください。' },
  { flowerName: 'Jasmine Window', flowerNameJa: '茉莉花の窓', omenType: 'Small Blessing', omenTypeJa: '小さな祝福', message: 'The night may bring a gentler thought than the afternoon allowed.', messageJa: '夜は、午後には許されなかったやさしい考えを連れてくるかもしれません。', meaning: 'Rest can rearrange what effort could not.', meaningJa: '休むことで、努力では動かなかったものが並び替わることがあります。', smallAction: 'Prepare your sleeping space with care.', smallActionJa: '眠る場所を、少し丁寧に整えてください。', luckyItem: 'A small towel', luckyItemJa: '小さなタオル', warning: 'Do not invite tomorrow into your pillow.', warningJa: '枕元に、明日の心配を招き入れないでください。' },
  { flowerName: 'Pine Orchid', flowerNameJa: '松蘭', omenType: 'Hidden Strength', omenTypeJa: '隠れた強さ', message: 'Elegance is sometimes simply refusing to rush.', messageJa: '優雅さとは、ときに急がないと決めることです。', meaning: 'Your timing deserves respect, even when others tap their feet.', meaningJa: '誰かが足踏みしていても、あなたの間合いは尊重されてよいものです。', smallAction: 'Walk slower for one hallway or street.', smallActionJa: '廊下か道をひとつ、いつもよりゆっくり歩いてください。', luckyItem: 'A wooden object', luckyItemJa: '木のもの', warning: 'Do not trade your rhythm for someone else’s panic.', warningJa: '誰かの焦りと、あなたのリズムを交換しないでください。' },
  { flowerName: 'Azalea Gate', flowerNameJa: '躑躅の門', omenType: 'Gentle Change', omenTypeJa: 'やさしい変化', message: 'A familiar entrance may open onto a different garden.', messageJa: '見慣れた入口が、違う庭へ開くことがあります。', meaning: 'Repetition is not always stagnation; sometimes it is return with new eyes.', meaningJa: '繰り返しは停滞とは限りません。新しい目で戻ることもあります。', smallAction: 'Take a slightly different route.', smallActionJa: '少しだけ違う道を通ってください。', luckyItem: 'A small gate or doorway', luckyItemJa: '小さな門、または戸口', warning: 'Do not assume you already know the whole path.', warningJa: 'その道のすべてを、もう知っていると思いこまないでください。' },
  { flowerName: 'Marigold Incense', flowerNameJa: '金盞花の香', omenType: 'Quiet Warning', omenTypeJa: '静かな注意', message: 'Not every bright thing deserves your attention.', messageJa: '明るく光るものすべてに、あなたの注意を渡さなくても大丈夫です。', meaning: 'Distraction may arrive dressed as importance.', meaningJa: '気を散らすものは、大切そうな服を着てやって来ることがあります。', smallAction: 'Put one device away for twenty minutes.', smallActionJa: '端末をひとつ、二十分だけ遠ざけてください。', luckyItem: 'A warm-colored thread', luckyItemJa: '暖かな色の糸', warning: 'Do not feed every spark until it becomes a fire.', warningJa: 'すべての火花に餌をやって、炎に育てないでください。' },
  { flowerName: 'Clover Lantern', flowerNameJa: 'クローバーの灯り', omenType: 'Small Blessing', omenTypeJa: '小さな祝福', message: 'Luck may be hiding in a practical detail.', messageJa: '幸運は、実用的な細部に隠れているかもしれません。', meaning: 'A humble correction or small preparation can protect your ease.', meaningJa: 'ささやかな確認や準備が、あなたの安らぎを守ります。', smallAction: 'Check one appointment, bag, or pocket.', smallActionJa: '予定、鞄、ポケットのどれかをひとつ確認してください。', luckyItem: 'A green token', luckyItemJa: '緑色のお守り', warning: 'Do not ignore the quiet usefulness of preparation.', warningJa: '準備の静かな役立ちを、軽く見ないでください。' },
  { flowerName: 'Evening Primrose', flowerNameJa: '宵待草', omenType: 'Gentle Change', omenTypeJa: 'やさしい変化', message: 'Some parts of you open only after the world grows quiet.', messageJa: '世界が静かになってから開く、あなたの部分があります。', meaning: 'Give yourself permission to unfold outside ordinary hours.', meaningJa: '普通の時間の外でほどけていくことを、自分に許してください。', smallAction: 'Spend ten minutes with a private pleasure.', smallActionJa: 'ひそかな楽しみと、十分だけ過ごしてください。', luckyItem: 'Soft yellow light', luckyItemJa: 'やわらかな黄色い灯り', warning: 'Do not compare your blooming time to daylight flowers.', warningJa: '昼に咲く花と、あなたの咲く時間を比べないでください。' },
];

const moodSelect = document.getElementById('moodSelect');
const drawButton = document.getElementById('drawButton');
const drawAgainButton = document.getElementById('drawAgainButton');
const resultCard = document.getElementById('resultCard');
const historyList = document.getElementById('historyList');
const clearHistoryButton = document.getElementById('clearHistoryButton');

const moodTranslations = {
  Quiet: '静か',
  Tired: '疲れている',
  Restless: '落ち着かない',
  Hopeful: '希望がある',
  Lonely: 'さみしい',
  Annoyed: 'いらいら'
};

function todayKey() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function formatDate(dateText) {
  return new Date(`${dateText}T00:00:00`).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function getStoredJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch (error) {
    return fallback;
  }
}

function randomOracle() {
  return flowerOracles[Math.floor(Math.random() * flowerOracles.length)];
}

function saveResult(result) {
  localStorage.setItem(TODAY_KEY, JSON.stringify(result));
  const history = getStoredJson(HISTORY_KEY, []);
  history.unshift(result);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 30)));
}

function drawFlower(forceNew = false) {
  const today = todayKey();
  const saved = getStoredJson(TODAY_KEY, null);

  if (!forceNew && saved && saved.date === today) {
    showResult(saved);
    return;
  }

  const id = globalThis.crypto?.randomUUID?.() || String(Date.now());
  const result = { ...randomOracle(), mood: moodSelect.value, date: today, id };
  saveResult(result);
  showResult(result);
  renderHistory();
}

function showResult(result) {
  const mood = result.mood || 'Quiet';
  const moodJa = moodTranslations[mood] || '';

  moodSelect.value = mood;
  resultCard.classList.remove('hidden');
  resultCard.innerHTML = `
    <p class="result-kicker">Mood: ${escapeHtml(mood)}<br><span class="ja-text">気分${moodJa ? `：${escapeHtml(moodJa)}` : ''}</span></p>
    <h3>${escapeHtml(result.flowerName)}<br><span class="ja-flower">${escapeHtml(result.flowerNameJa || '')}</span></h3>
    <p class="omen">${escapeHtml(result.omenType)}<br><span class="ja-text">${escapeHtml(result.omenTypeJa || '')}</span></p>
    <p class="message">“${escapeHtml(result.message)}”<br><span class="ja-message">「${escapeHtml(result.messageJa || '')}」</span></p>
    <div class="detail-grid">
      <p class="detail"><strong>Meaning<br><span class="ja-label">意味</span></strong>${escapeHtml(result.meaning)}<br><span class="ja-text">${escapeHtml(result.meaningJa || '')}</span></p>
      <p class="detail"><strong>Small action<br><span class="ja-label">小さな行い</span></strong>${escapeHtml(result.smallAction)}<br><span class="ja-text">${escapeHtml(result.smallActionJa || '')}</span></p>
      <p class="detail"><strong>Lucky item<br><span class="ja-label">幸運のもの</span></strong>${escapeHtml(result.luckyItem)}<br><span class="ja-text">${escapeHtml(result.luckyItemJa || '')}</span></p>
      <p class="detail"><strong>Gentle warning<br><span class="ja-label">やさしい注意</span></strong>${escapeHtml(result.warning)}<br><span class="ja-text">${escapeHtml(result.warningJa || '')}</span></p>
    </div>
  `;
}

function renderHistory() {
  const history = getStoredJson(HISTORY_KEY, []).slice(0, MAX_HISTORY_ITEMS);
  historyList.innerHTML = '';

  if (history.length === 0) {
    historyList.innerHTML = '<li class="empty-history">No flowers have fallen yet.<br><span class="ja-text">まだ花は降っていません。</span></li>';
    return;
  }

  history.forEach((item) => {
    const entry = document.createElement('li');
    entry.innerHTML = `
      <span class="history-date">${escapeHtml(formatDate(item.date))}${item.mood ? ` · Mood: ${escapeHtml(item.mood)}${moodTranslations[item.mood] ? ` / ${escapeHtml(moodTranslations[item.mood])}` : ''}` : ''}</span>
      <span>${escapeHtml(item.flowerName)} <span class="ja-text">${escapeHtml(item.flowerNameJa || '')}</span> — <strong>${escapeHtml(item.omenType)}</strong> <span class="ja-text">${escapeHtml(item.omenTypeJa || '')}</span></span>
    `;
    historyList.appendChild(entry);
  });
}

function clearHistory() {
  if (!confirm('Clear all saved flower history?\n保存した花の履歴をすべて消しますか？')) return;
  localStorage.removeItem(TODAY_KEY);
  localStorage.removeItem(HISTORY_KEY);
  resultCard.classList.add('hidden');
  resultCard.innerHTML = '';
  renderHistory();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[character]);
}

drawButton.addEventListener('click', () => drawFlower(false));
drawAgainButton.addEventListener('click', () => drawFlower(true));
clearHistoryButton.addEventListener('click', clearHistory);

const savedToday = getStoredJson(TODAY_KEY, null);
if (savedToday && savedToday.date === todayKey()) showResult(savedToday);
renderHistory();
