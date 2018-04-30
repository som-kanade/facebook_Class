// facebook class

class faceBook_Profile {

    private id : number// The facebook Id
    private about ?: string// About Me
    private phoneNo ?: number// Phone No
    private email ?: string// Email
    private workPlaces ?: string[]// Workplaces
    private education ?: string[]// Education
    private dob : string// Date of Birth
    private homeTown ?: string// home town
    private familyMember ?: number[]// Facebook Ids of Family members
    private friends ?: number[]// Facebook Ids of friends
    private photos ?: string[]// URL of photos
    private videos ?: string[]// URL of videos
    private checkIns ?: string[]// Checkins
    private sports ?: string[]// sports
    private music ?: string[]// music
    private likes ?: string[]// likes



    constructor(id : number, dob : string, friends ?: number[], photos ?: string[], videos ?: string[], about ?: string, phoneNo ?: number, email ?: string, workPlaces ?: string[],education ?: string[],  homeTown ?: string, familyMember ?: number[], checkIns ?: string[], sports ?: string[], music ?: string[], likes ?: string[]){

        this.id = id
        this.about = about
        this.phoneNo = phoneNo
        this.email = email
        this.workPlaces = workPlaces
        this.education = education
        this.dob = dob
        this.homeTown = homeTown
        this.familyMember = familyMember
        this.friends = friends
        this.photos = photos
        this.videos = videos
        this.checkIns = checkIns
        this.sports = sports
        this.music = music
        this.likes = likes
}

getID = () => {
    return this.id;
}

getDob = () => {
    return this.dob;
}

getAbout = () => {
    if(this.about){
        return this.about;
    }
    else{
        return null;
    }
}

getPhoneNo = () => {
    if(this.phoneNo){
        return this.phoneNo
    } else {
        return null
    }
}
getEmail = () => {
    if(this.email){
        return this.email
    } else {
        return null
    }
}
getWorkPlaces = () => {
    if(this.workPlaces){
        return this.workPlaces
    } else {
        return null
    }
}
getEducation = () => {
    if(this.education){
        return this.education
    } else {
        return null
    }
}
getHomeTown = () => {
    if(this.homeTown){
        return this.homeTown
    } else {
        return null
    }
}
getFamilyMember = () => {
    if(this.familyMember){
        return this.familyMember
    } else {
        return null
    }
}
getFriends = () => {
    if(this.friends){
        return this.friends
    } else {
        return null
    }
}
getPhotos = () => {
    if(this.photos){
        return this.photos
    } else {
        return null
    }
}
getVideos = () => {
    if(this.videos){
        return this.videos
    } else {
        return null
    }
}
getCheckIns = () => {
    if(this.checkIns){
        return this.checkIns
    } else {
        return null
    }
}
getSports = () => {
    if(this.sports){
        return this.sports
    } else {
        return null
    }
}
getMusic = () => {
    if(this.music){
        return this.music
    } else {
        return null
    }
}
getLikes = () => {
    if(this.likes){
        return this.likes
    } else {
        return null
    }
}

//methods
getAge = () => {
    console.log("Calculates the age")
}

}

// create a object

let soms = new faceBook_Profile(
    789, // fb id
    "13/02/1995", // dob
    [111,222,333,444,555], // ids of frieends list
    ["http://www.facebook.com/photo/1234","http://www.facebook.com/photo/12","http://www.facebook.com/photo/122"], //Photos
    ["http://www.facebook.com/videos/1234","http://www.facebook.com/videos/12","http://www.facebook.com/videos/122"], //Videos
    "Hi!! I am Som", // about
    1234567890, // phone number
    "abc@xyz.com", // mail id
    ["ABC company"], // workplace
    ["ABC College"], // education
    "Bangalore", //hometown
    [111,222,333,444,555], // family member
    ["abc","xyz"], //Check Ins
    ["Cricket","volleyBall"], //Sports
    ["Ed Sheeran","Liknkin Park"], //Music
    ["Javascript","RVCJ Media"] //Likes
)


console.log("Id : ",soms.getID())
console.log("About :",soms.getAbout())
console.log("Dob :", soms.getDob())
console.log("Phone No :", soms.getPhoneNo())
console.log("Email :", soms.getEmail())
console.log("Education :", soms.getEducation())
console.log("Work Places", soms.getWorkPlaces())
console.log("Home Town", soms.getHomeTown())
console.log("Friends :",  soms.getFriends())
console.log("Family :", soms.getFamilyMember())
console.log("Photos :", soms.getPhotos())
console.log("Videos :", soms.getVideos())
console.log("Check Ins", soms.getCheckIns())
console.log("Sports", soms.getSports())
console.log("Music", soms.getMusic())
console.log("Likes", soms.getLikes())

