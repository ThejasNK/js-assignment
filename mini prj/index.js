var quotes = new Array(20)
quotes[0] = "Nothing is as easy as it looks."
quotes[1] = "Everything takes longer than you think."
quotes[2] = "Anything that can go wrong will go wrong."
quotes[3] = "If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong."
quotes[4] = "If there is a worse time for something to go wrong, it will happen then."
quotes[5] = "If anything simply cannot go wrong, it will anyway."
quotes[6] = "If you perceive that there are four possible ways in which a procedure can go wrong, and circumvent these, then a fifth way, unprepared for, will promptly develop."
quotes[7] = "Left to themselves, things tend to go from bad to worse."
quotes[8] = "If everything seems to be going well, you have obviously overlooked something."
quotes[9] = "Nature always sides with the hidden flaw."
quotes[10] = "Mother nature is a bitch."
quotes[11] = "It is impossible to make anything foolproof because fools are so ingenious."
quotes[12] = "Whenever you set out to do something, something else must be done first."
quotes[13] = "Every solution breeds new problems."
quotes[14] = "Trust everybody ... then cut the cards."
quotes[15] = "Two wrongs are only the beginning."
quotes[16] = "If at first you don't succeed, destroy all evidence that you tried."
quotes[17] = "To succeed in politics, it is often necessary to rise above your principles."
quotes[18] = "Exceptions prove the rule ... and wreck the budget."
quotes[19] = "Success always occurs in private, and failure in full view."


function newQuote(){
var randomNumber=Math.floor(Math.random()*(quotes.length));
document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}