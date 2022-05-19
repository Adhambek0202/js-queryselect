const data = [
  { 
    src: 'https://picsum.photos/200/300?random=1',
    id: 1,
    first_name: "Sophronia",
    last_name: "Stoddart",
    email: "sstoddart0@howstuffworks.com",
    gender: "Female",
    ip_address: "80.215.124.45",
  },
  { 
    src: 'https://picsum.photos/200/300?random=2',
    id: 2,
    first_name: "Elie",
    last_name: "Ashenhurst",
    email: "eashenhurst1@ameblo.jp",
    gender: "Female",
    ip_address: "68.37.253.68",
  },
  { 
    src: 'https://picsum.photos/200/300?random=3',
    id: 3,
    first_name: "Elianore",
    last_name: "Eaddy",
    email: "eeaddy2@chronoengine.com",
    gender: "Female",
    ip_address: "67.148.137.105",
  },
  { 
    src: 'https://picsum.photos/200/300?random=4',
    id: 4,
    first_name: "Brittne",
    last_name: "Heditch",
    email: "bheditch3@businessweek.com",
    gender: "Female",
    ip_address: "100.224.120.91",
  },
  { 
    src: 'https://picsum.photos/200/300?random=5',
    id: 5,
    first_name: "Harman",
    last_name: "Mashal",
    email: "hmashal4@sakura.ne.jp",
    gender: "Male",
    ip_address: "135.116.148.60",
  },
  { 
    src: 'https://picsum.photos/200/300?random=6',
    id: 6,
    first_name: "Flore",
    last_name: "Zappel",
    email: "fzappel5@tripod.com",
    gender: "Female",
    ip_address: "78.191.118.28",
  },
  { 
    src: 'https://picsum.photos/200/300?random=7',
    id: 7,
    first_name: "Angelina",
    last_name: "Manneville",
    email: "amanneville6@lycos.com",
    gender: "Bigender",
    ip_address: "176.253.242.10",
  },
  { 
    src: 'https://picsum.photos/200/300?random=8',
    id: 8,
    first_name: "Merilyn",
    last_name: "Marusik",
    email: "mmarusik7@1und1.de",
    gender: "Female",
    ip_address: "221.137.214.47",
  },
  { 
    src: 'https://picsum.photos/200/300?random=9',
    id: 9,
    first_name: "Jeddy",
    last_name: "Brunn",
    email: "jbrunn8@umn.edu",
    gender: "Male",
    ip_address: "9.189.41.129",
  },
  { 
    src: 'https://picsum.photos/200/300?random=10',
    id: 10,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  },
  { 
    src: 'https://picsum.photos/200/300?random=11',
    id: 11,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  },
];

const card0Img = document.querySelectorAll('.user__img')
card0Img[0].src = data[0].src;
const card0Name =document.querySelectorAll('.user__fullname')
card0Name[0].textContent = data[0].first_name+' ' +data[0].last_name;
const card0email =document.querySelectorAll('.user__email')
card0email[0].textContent = data[0].email
const card0gender =document.querySelectorAll('.user__gender')
card0gender[0].textContent =data[0].gender
const card0Addres =document.querySelectorAll('.user__address')
card0Addres[0].textContent =data[0].ip_address


const card1Img = document.querySelectorAll('.user__img')
card1Img[1].src = data[1].src;
const card1Name =document.querySelectorAll('.user__fullname')
card1Name[1].textContent = data[1].first_name+' ' +data[1].last_name;
const card1email =document.querySelectorAll('.user__email')
card1email[1].textContent = data[1].email
const card1gender =document.querySelectorAll('.user__gender')
card1gender[1].textContent =data[1].gender
const card1Addres =document.querySelectorAll('.user__address')
card1Addres[1].textContent =data[1].ip_address


const card2Img = document.querySelectorAll('.user__img')
card2Img[2].src = data[2].src;
const card2Name =document.querySelectorAll('.user__fullname')
card2Name[2].textContent = data[2].first_name+' ' +data[2].last_name;
const card2email =document.querySelectorAll('.user__email')
card2email[2].textContent = data[2].email
const card2gender =document.querySelectorAll('.user__gender')
card2gender[2].textContent =data[2].gender
const card2Addres =document.querySelectorAll('.user__address')
card2Addres[2].textContent =data[2].ip_address


const card3Img = document.querySelectorAll('.user__img')
card3Img[3].src = data[3].src;
const card3Name =document.querySelectorAll('.user__fullname')
card3Name[3].textContent = data[3].first_name+' ' +data[3].last_name;
const card3email =document.querySelectorAll('.user__email')
card3email[3].textContent = data[3].email
const card3gender =document.querySelectorAll('.user__gender')
card3gender[3].textContent =data[3].gender
const card3Addres =document.querySelectorAll('.user__address')
card3Addres[3].textContent =data[3].ip_address


const card4Img = document.querySelectorAll('.user__img')
card4Img[4].src = data[4].src;
const card4Name =document.querySelectorAll('.user__fullname')
card4Name[4].textContent = data[4].first_name+' ' +data[4].last_name;
const card4email =document.querySelectorAll('.user__email')
card4email[4].textContent = data[4].email
const card4gender =document.querySelectorAll('.user__gender')
card4gender[4].textContent =data[4].gender
const card4Addres =document.querySelectorAll('.user__address')
card4Addres[4].textContent =data[4].ip_address


const card5Img = document.querySelectorAll('.user__img')
card5Img[5].src = data[5].src;
const card5Name =document.querySelectorAll('.user__fullname')
card5Name[5].textContent = data[5].first_name+' ' +data[5].last_name;
const card5email =document.querySelectorAll('.user__email')
card5email[5].textContent = data[5].email
const card5gender =document.querySelectorAll('.user__gender')
card5gender[5].textContent =data[5].gender
const card5Addres =document.querySelectorAll('.user__address')
card5Addres[5].textContent =data[5].ip_address


const card6Img = document.querySelectorAll('.user__img')
card6Img[6].src = data[6].src;
const card6Name =document.querySelectorAll('.user__fullname')
card6Name[6].textContent = data[6].first_name+' ' +data[6].last_name;
const card6email =document.querySelectorAll('.user__email')
card6email[6].textContent = data[6].email
const card6gender =document.querySelectorAll('.user__gender')
card6gender[6].textContent =data[6].gender
const card6Addres =document.querySelectorAll('.user__address')
card6Addres[6].textContent =data[6].ip_address


const card7Img = document.querySelectorAll('.user__img')
card7Img[7].src = data[7].src;
const card7Name =document.querySelectorAll('.user__fullname')
card7Name[7].textContent = data[7].first_name+' ' +data[7].last_name;
const card7email =document.querySelectorAll('.user__email')
card7email[7].textContent = data[7].email
const card7gender =document.querySelectorAll('.user__gender')
card7gender[7].textContent =data[7].gender
const card7Addres =document.querySelectorAll('.user__address')
card7Addres[7].textContent =data[7].ip_address


const card8Img = document.querySelectorAll('.user__img')
card8Img[8].src = data[8].src;
const card8Name =document.querySelectorAll('.user__fullname')
card8Name[8].textContent = data[8].first_name+' ' +data[8].last_name;
const card8email =document.querySelectorAll('.user__email')
card8email[8].textContent = data[8].email
const card8gender =document.querySelectorAll('.user__gender')
card8gender[8].textContent =data[8].gender
const card8Addres =document.querySelectorAll('.user__address')
card8Addres[8].textContent =data[8].ip_address


const card9Img = document.querySelectorAll('.user__img')
card9Img[9].src = data[9].src;
const card9Name =document.querySelectorAll('.user__fullname')
card9Name[9].textContent = data[9].first_name+' ' +data[9].last_name;
const card9email =document.querySelectorAll('.user__email')
card9email[9].textContent = data[9].email
const card9gender =document.querySelectorAll('.user__gender')
card9gender[9].textContent =data[9].gender
const card9Addres =document.querySelectorAll('.user__address')
card9Addres[9].textContent =data[9].ip_address



const card10Img = document.querySelectorAll('.user__img')
card10Img[10].src = data[10].src;
const card10Name =document.querySelectorAll('.user__fullname')
card10Name[10].textContent = data[10].first_name+' ' +data[10].last_name;
const card10email =document.querySelectorAll('.user__email')
card10email[10].textContent = data[10].email
const card10gender =document.querySelectorAll('.user__gender')
card10gender[10].textContent =data[10].gender
const card10Addres =document.querySelectorAll('.user__address')
card10Addres[10].textContent =data[10].ip_address






