// returns poem of ten lines
export const generate_poem = () => {
    const lines = ["I wrote this letter especially for you", "To prove that my love for you is true", "not being around with you, I really felt blue", "I really miss you and I hope you do too", "To show you what my feelings are going through", "I felt the urge to put my feelings in writing", "Because when I met you I was struck by lightning", "Because being with you was really exciting", "The thought of not being with you is frightening", "I really feel our connection is tightening", "You are always on my mind", "Ever since meeting you my feelings are in a whirlwind", "I have never met anybody of your kind", "Here you will find my thoughts, outlined", "Your love makes me blind", "*, I never told you how I truly feel", "Hiding my feelings is far from ideal", "You mean to me a great deal", "Being with you feels surreal", "You probably think my heart is from steel", "Never shall I kiss someone else's lips", "Never will we make any boring trips", "With you I will plan all my trips", "Not having you around feels like a solar eclipse", "After kissing you I have yet to come to grips", "Love is our connection", "To you I dedicate all my affection", "You are like perfection", "I will always offer you my protection", "It will give our live a meaningful direction", "*, my dear sweetheart", "let our roads never go apart", "I will always carry you within my heart", "You are at the top of my chart", "I really feel my life did just start", "You are my eternal sunshine", "You are my true valentine", "I hope you'll forever be mine", "When I first met you I knew it was a sign", "Especially for you I created this rhyme", "*, you are unbelievably beautiful", "When I am near you my heart goes like a raging bull", "Not having met you earlier makes me feel like a fool", "For you I would risk dying in duel", "You deserve world's largest jewel", "With our love combined everything is in reach", "Seeing the sun go under at the beach", "Together we can withstand any siege", "Our connection cannot be breached", "Meeting you for the first time, I was without speech", "Meeting you was like winning the grand prize", "Especially when looking into your beautiful eyes", "Immediately, my heart rate was on the rise", "It immediately clicked, to our surprise", "but I definitely choose you, above a sum of any size", "I would rather have you than a million bucks", "Or than a mansion, no matter how deluxe", "when you are away I am a state of flux", "you deserve roses, filling many trucks", "You are like a white swan amidst ordinary ducks", "Words cannot express", "What I felt when you said 'yes'", "How beautiful you are, no matter how you dress", "What it makes me feel when I see you in distress", "How you have captured my heart with success", "I am not sure you will like my poem", "But know that I am completely overblown", "But know that my heart is overthrown", "At least this way my love for you becomes known", "Know at least that my love for you is set in stone", "The moment I saw you my heart was sold", "The two of us together will never be cold", "I dream that together we will grow old", "We fit together like a nut and bolt", "I felt energized as if struck by one thousand volt", "I think we are the perfect match", "You are the greatest catch", "For you I am willing to stretch", "Together our hearts can withstand any scratch", "Together we shine, without any scratch", "*, you mean so much to me", "I never knew this could be", "With you I really feel free", "Being with you, one plus one equals three", "I love you forever, that I guarantee", "We met each other, some time ago", "It was the first time we said 'Hello'", "You made deep impact, that you should know", "Since then my love for you did only grow", "Read about my feelings in the lines following below", "Our life together has just begun", "Already we have had many moments of fun", "It feels as if we hit a home run", "We fit together, like the moon and the sun", "Not having you around makes me feel numb", "Being with you makes everything else so futile", "I cannot resist your beautiful smile", "Being with you makes life really worthwhile", "Every night I dream of your smile", "I have been feeling like this for quite a while", "You are my sweetheart day by day", "I hope you will never go away", "I would like to meet you without delay", "I will always carry you with me, in whichever what way", "Without you my life goes astray", "My love is so strong, it makes me fly", "You are so beautiful, like the most beautiful sky", "I love you immensely, that I cannot deny", "Each time we part I have to deeply sigh", "Let us never say 'farewell and goodbye'", "I anxiously await our time ahead", "With impatience, I am fed", "My heart is completely filled in red", "Not being together, my heart feels dead", "For now, I keep dreaming of you instead", "Eternal bliss is where I'm bound", "In your arms is where it's found", "Near you, everything is sound", "Kissing you, I fell of the ground", "Together, everything will come round", "This # is for you, I hope you will like it", "I am dying to see your reaction, that I will admit", "Hoping to capture your heart, bit by bit", "Because to me, you are my biggest hit", "Because loving you, I will never quit", "All of you is what I need", "Please tell me where it can lead", "I count the hours until my love is freed", "I hope we will soon meet", "Together, we will succeed", "I hope you can put this # to use", "It is a gift you cannot refuse", "To surprise you I do not need any excuse", "Being with you still blows my fuse", "It is a symbol of more good news", "I hope we make it, I hope it will be fast", "I hope the moment forever lasts", "Together, at long last", "My love for you is truly vast", "Loneliness soon really lies in the past", "This poem has come to an end", "There are many more I would like to send", "Remember that, without you, my heart feels bent", "See you soon, my dearest friend", "I look forward to our next event", "I look forward to our next moment together", "Without you, I feel life does not matter", "Even when it is raining it feels like the best weather", "With you, life cannot become any better", "I hope you enjoyed this letter", "Bye bye, my love", "Remember all I said above", "I really meant everything I said above", "I hope you enjoyed this letter, at least kind of", "You are someone I am very proud of", "Until soon, when we meet again", "I will please you in whatever way I can", "Your heart is where I am", "Until then, my love is flowing like water through a broken dam", "Bye bye, my love, you are my one true gem"]
    const random_multiple_of_ten = Math.round((Math.random()*(lines.length))/10)*10;
    const ten_lines = lines.slice(random_multiple_of_ten, random_multiple_of_ten+10);
    const spaced_out = ten_lines.map(line => <p>{line.replace("#", "poem").replace("*", "Love")}</p>)
    return spaced_out;
}
