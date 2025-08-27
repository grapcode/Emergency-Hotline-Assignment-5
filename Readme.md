📌 নিম্নলিখিত প্রশ্নের উত্তর:------------------------------------------

➡️১. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

উত্তর: getElementById সব সময় একটি Element দেয়, আর getElementsByClassName-->html collection দেয় array এরমত ক্নিতু পুরো পুরি array না। querySelector ---> প্রথম Element পিরত দেয়। querySelectorAll এটা nodelist এর মতন সব Element দেয়।

➡️২. How do you create and insert a new element into the DOM?

উত্তর: এটা দ্বারা নতুন Element তৈরী করে document.createElement('div') । তারপর ঐ ভরিএভলে নাম ধরে innerHTML = এর পর backtick দিবে এবং যে Element নতুন করে তৈরী করতে চায় সেটা দিবে, তারপর appendChild করবে।

➡️৩. What is Event Bubbling and how does it work?

উত্তর: কোন একটা event গটা তথা, child থেকে parent পর্যন্ত উপরে উঠে এই ইভেন্টি তার উপরের element কে জানিয়ে দেয়, কেউ একজন তাকে ক্লিক করছে।

➡️৪. What is Event Delegation in JavaScript? Why is it useful?

উত্তর: যেখানে একটি parent Element কে addEventListener দিয়ে তার child কে হ্যান্ডেল করে। এটির কোড কম তাই দেখতে সুন্দর এবং পারফারম্যান্স ভাল, ডায়নামিক করা যায়।

➡️৫. What is the difference between preventDefault() and stopPropagation() methods?

উত্তর: preventDefault() অটো চলাকে থামিয়ে দেয়, তথা ডিফল্ড কাজ থেকে বিরত থাকা। আর stopPropagation() হলো একটা event কে উপরের দিকে উঠতে বাধা দেওয়া হয়।
