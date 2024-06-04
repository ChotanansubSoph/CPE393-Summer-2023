// Determining the level of academic standing based on GPA

let gpa = 3.4;

if (gpa >= 3.7) {
    console.log('🎉 Your academic standing is Excellent. Contact TA Chokun for award details.');
    console.log('Your academic standing is Good. You are eligible for a minor scholarship.');
    console.log("Please see Dr. Piyanit for more information.");

} else if (gpa >= 3.0) {
    console.log('🎉 Your academic standing is Good.');

} else if (gpa >= 2.0) {
    console.log('🎉 Your academic standing is Average');
    console.log('Keep working hard');
    
} else {
    console.log('🥹 Your academic standing is Below Average.');
    console.log('Please schedule a meeting for academic counseling.');
}