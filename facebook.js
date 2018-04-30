// facebook class
var faceBook_Profile = /** @class */ (function () {
    function faceBook_Profile(id, dob, friends, photos, videos, about, phoneNo, email, workPlaces, education, homeTown, familyMember, checkIns, sports, music, likes) {
        var _this = this;
        this.getID = function () {
            return _this.id;
        };
        this.getDob = function () {
            return _this.dob;
        };
        this.getAbout = function () {
            if (_this.about) {
                return _this.about;
            }
            else {
                return null;
            }
        };
        this.getPhoneNo = function () {
            if (_this.phoneNo) {
                return _this.phoneNo;
            }
            else {
                return null;
            }
        };
        this.getEmail = function () {
            if (_this.email) {
                return _this.email;
            }
            else {
                return null;
            }
        };
        this.getWorkPlaces = function () {
            if (_this.workPlaces) {
                return _this.workPlaces;
            }
            else {
                return null;
            }
        };
        this.getEducation = function () {
            if (_this.education) {
                return _this.education;
            }
            else {
                return null;
            }
        };
        this.getHomeTown = function () {
            if (_this.homeTown) {
                return _this.homeTown;
            }
            else {
                return null;
            }
        };
        this.getFamilyMember = function () {
            if (_this.familyMember) {
                return _this.familyMember;
            }
            else {
                return null;
            }
        };
        this.getFriends = function () {
            if (_this.friends) {
                return _this.friends;
            }
            else {
                return null;
            }
        };
        this.getPhotos = function () {
            if (_this.photos) {
                return _this.photos;
            }
            else {
                return null;
            }
        };
        this.getVideos = function () {
            if (_this.videos) {
                return _this.videos;
            }
            else {
                return null;
            }
        };
        this.getCheckIns = function () {
            if (_this.checkIns) {
                return _this.checkIns;
            }
            else {
                return null;
            }
        };
        this.getSports = function () {
            if (_this.sports) {
                return _this.sports;
            }
            else {
                return null;
            }
        };
        this.getMusic = function () {
            if (_this.music) {
                return _this.music;
            }
            else {
                return null;
            }
        };
        this.getLikes = function () {
            if (_this.likes) {
                return _this.likes;
            }
            else {
                return null;
            }
        };
        //methods
        this.getAge = function () {
            console.log("Calculates the age");
        };
        this.id = id;
        this.about = about;
        this.phoneNo = phoneNo;
        this.email = email;
        this.workPlaces = workPlaces;
        this.education = education;
        this.dob = dob;
        this.homeTown = homeTown;
        this.familyMember = familyMember;
        this.friends = friends;
        this.photos = photos;
        this.videos = videos;
        this.checkIns = checkIns;
        this.sports = sports;
        this.music = music;
        this.likes = likes;
    }
    return faceBook_Profile;
}());
// create a object
var soms = new faceBook_Profile(789, // fb id
"13/02/1995", // dob
[111, 222, 333, 444, 555], // ids of frieends list
["http://www.facebook.com/photo/1234", "http://www.facebook.com/photo/12", "http://www.facebook.com/photo/122"], //Photos
["http://www.facebook.com/videos/1234", "http://www.facebook.com/videos/12", "http://www.facebook.com/videos/122"], //Videos
"Hi!! I am Som", // about
1234567890, // phone number
"abc@xyz.com", // mail id
["ABC company"], // workplace
["ABC College"], // education
"Bangalore", //hometown
[111, 222, 333, 444, 555], // family member
["abc", "xyz"], //Check Ins
["Cricket", "volleyBall"], //Sports
["Ed Sheeran", "Liknkin Park"], //Music
["Javascript", "RVCJ Media"] //Likes
);
console.log("Id : ", soms.getID());
console.log("About :", soms.getAbout());
console.log("Dob :", soms.getDob());
console.log("Phone No :", soms.getPhoneNo());
console.log("Email :", soms.getEmail());
console.log("Education :", soms.getEducation());
console.log("Work Places", soms.getWorkPlaces());
console.log("Home Town", soms.getHomeTown());
console.log("Friends :", soms.getFriends());
console.log("Family :", soms.getFamilyMember());
console.log("Photos :", soms.getPhotos());
console.log("Videos :", soms.getVideos());
console.log("Check Ins", soms.getCheckIns());
console.log("Sports", soms.getSports());
console.log("Music", soms.getMusic());
console.log("Likes", soms.getLikes());
