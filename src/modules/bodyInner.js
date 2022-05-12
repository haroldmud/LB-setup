const boddyInner = () => {
  document.body.innerHTML = `<main class= "mainTag"><h1>Leaderboard</h1>
    <section class="contain"><div class="recentBock"><div class="recentScore">
    <h2 class="recentHead">Recent Scores</h2>
    <button class="recentBtn" id="refreshBtn">Refresh</button></div>
    <div class="names" id="pContainer">
    
    </div>
    </div>
    <div class="AddScore"><h2>Add your score</h2>
    <input id="nameInput" type="text" placeholder="Your name">
    <input id="scoreInput" type="text" placeholder="Your score">
    <input id="submitInput" type="submit" value="submit" class="submit"></div></section>
    </main>`;
};

export default boddyInner;