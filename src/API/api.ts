import { Appointment } from "./interfaces/appointment";
import doctor from "./interfaces/doctor"


const appointments:Appointment[] = []; 


const doctors:doctor[] = [
    {
        name:'Dr. Steven Weiner, MD',
        rating:5.0,
        specialities:'Primary Care Doctor',
        location:'New York,USA',
        language:'English',
        gender:'Male',
        photoUrl:'https://d2uur722ua7fvv.cloudfront.net/db615140-2832-4722-a99a-382adeafd21bzoom.jpg',
        description:'I treat common mood disorders and mental health conditions through effective medication prescription and management. I treat patients with anxiety, depression, panic attacks, alcohol abuse, substance abuse, and opioid abuse/addiction.'
    },

    {
        name:'Dr. Erin Hendriks, MD',
        rating:5.0,
        gender:'female',
        language:'English',
        specialities:'Family Physician, Primary Care Doctor, Integrative Health Medicine Specialist',
        location:'Hawaii',
        photoUrl:'https://d1k13df5m14swc.cloudfront.net/cbf7f206-855e-424c-b205-e966b83a6f7azoom.jpg',
        description:'Please note: Salvo Health is a digitally-based CONCIERGE GUT HEALTH CLINIC specializing in IBS, GERD, SIBO, Celiac and other chronic gut-related conditions.'+
        +'  After an initial appointment with one of our gut-focused doctors, you can learn more about our Salvo Health program to help get control of long-term conditions, including doctors, nurses, dietitians, and behavioral health coaching, at salvohealth.com/membership.'+
        +'Dr. Erin Hendriks is a gut-specialist physician focused on chronic GI conditions, including IBS, GERD, Celiac disease, dyspepsia, bloating, inflammation, abdominal pain, nausea, constipation, and diarrhea. Her experience and expertise make her keenly aware of how often gut health specifically impacts women’s health.'+
        +'Dr. Hendriks is a board-certified family physician, integrative health specialist and certified functional medicine practitioner. She completed her undergraduate education at the University of Michigan followed by a medical degree at Wayne State University School of Medicine. She went on to complete her residency at the Mount Sinai Downtown in New York. Following residency, she completed a two-year Integrative Medicine fellowship with The University of Michigan and advanced functional medicine training with the Institute for Functional Medicine, earning the prestigious IFMCP certification.'
    },

    {
        name:'Dr. Nina Lisin Chang, DMD',
        rating:5.0,
        gender:'female',
        language:'English',
        specialities:'Dentist, Cosmetic Dentist, Dental Pain Specialist',
        location:'New York, NY',
        photoUrl:'https://d3wnzga3fpd9a.cloudfront.net/photos/Dr-Nina-Lisin-Chang-DMD-41730-circle_large__v1__.png',
        description:'Our philosophy at Dental Serenity of Manhattan is to create healthy, luminous smiles in which our patients can shine throughout their day. Dr. Nina (Li-Sin) Chang is an absolute perfectionist and only provides high quality care for her patients. As a thorough, compassionate dentist,customer care is the cornerstone of her office. To that end, Dental Serenity of Manhattan strives to ensure that our patients experience a positive and serene visit when they step through our doors. Dental Serenity of Manhattan creates custom treatment plans to match the needs and desires of our patients, and in doing so, empower them with confidence. We are at the forefront of the latest research and technology in dentistry. Our team is committed to providing the highest quality and best-in-class care to help our patients achieve optimal oral health.'+
        +'To conduct her pre-medical studies, Dr. Chang attended Columbia University. She pursued her dental education at the University of Pittsburg and the Flushing Hospital Medical Center. Dr. Chang has received advanced training in smile reconstruction and rejuvenation, Implants, Sleep Apnea, Invisalign braces and comprehensive orthodontic treatment with metal and ceramic braces. She is now a member of several professional organizations which include the American Dental Association, the American Academy of Cosmetic Dentistry, and the American Academy of Cosmetic Orthodontics.'+
        +'Patients visiting Dr. Chang can receive a full range of both general and cosmetic dental services. Treatment for dental emergencies are also available. When she is not treating patients, Dr. Chang enjoys reading, yoga, travel, and cooking.'+
        +''
    },

    {
        name:'Dr. John Griffin, MD',
        rating:4.65,
        gender:'male',
        language:'German,English',
        specialities:'Primary Care Doctor, Internist',
        location:'hof',
        photoUrl:'https://d2uur722ua7fvv.cloudfront.net/1c2beb65-6b79-44ea-8533-8da285140384zoom.jpg',
        description:'John Griffin, MD, is an ABIM board-certified Internal Medicine Physician at Genesis in Westfield, New Jersey. Dr. Griffin delivers excellence in the care of Telehealth patients with a broad range of conditions, including sprains, UTI, coughs, colds, shingles, toothache, yeast and bacterial infection such as sinus or ear infections, hypertension, diabetes, other acute and chronic disease states, and many other standard urgent care issues.'+
        +'Dr. Griffin earned his medical degree at St. Christopher IMD School of Medicine in Luton, England. He completed his Internal Medicine residency training at St. John’s Mercy Medical Center in St. Louis, Missouri.'+
        +'Dr. Griffin welcomes new and existing patients to Genesis Orthopaedic and Spine.'+
        +''
    },

    {
        name:'Casey Wettstein, NP',
        rating:5.0,
        gender:'female',
        language:'German,English',
        specialities:'Family Nurse Practitioner',
        location:'hof',
        photoUrl:'https://d3wnzga3fpd9a.cloudfront.net/d7437798-4a81-424d-b1c4-819d6f1d1da5zoom.jpg',
        description:'When booking an appointment more than 24 hours out, a deposit must be made to hold your appointment. Someone from the practice will reach out to you to collect payment. If this payment is not made within the 24 hour window, your appointment will be cancelled. The deposit will be refundable after payment is collected from insurance if applicable'+
        +'Ms. Casey Wettstein is a compassionate and dedicated nurse practitioner. She practices at KS Pediatrics in Wichita, KS, and offers treatments for a host ofillnesses an injuries.        '+
        +'Ms. Wettstein received her bachelor\'s degree from Wichita State University. She then attended Fort Hays State University, where she earned her master\'s degree in family nursing.'+
        +'Ms. Wettstein devotes herself to her patients\' well-being. As a professional, she stays current with developments and findings in her field, updating her methods and procedures accordingly.'
    },

    {
        name:'Dr. Bruce Borkosky, PsyD',
        rating:5.0,
        gender:'female',
        language:'German,English',
        specialities:'Psychologist',
        location:'Munich',
        photoUrl:'https://d2uur722ua7fvv.cloudfront.net/photos/Dr-Mariam-Vonderheide-DMD-344618-circle_large__v1__.png',
        description:'Warm, generous, and comforting, Dr. Borkosky is well suited to the first-time counseling client who has some problems but is uncertain about whether counseling can help. What can you expect from counseling? It depends on your needs, as Dr. Borkosky tries to help you with your problems as you see them. Patients often find that he asks questions that make them think or even that they never thought of before. He often sees patterns of interactions that aren\'t working so well, and thinks outside the box to come up with new solutions to problems. Many people are discouraged but they find that small victories give them hope.'+
        +'Since becoming licensed in 1994, Dr. Borkosky has treated or evaluated tens of thousands of patients. This wealth of experience has enabled him to develop a keen clinical knowledge and ability to understand people. He is proud to have learned many practical techniques to life\'s many problems, and enjoys bringing patients\' goals within reach.'+
        +'Dr. Borkosky also practices in the Courtroom. As a forensic specialist and expert witness, he has been admitted as an expert in many circuit courts and county courts in Munich'
    },


]


const getDoctorsByProfessionAndLocation = (profession:string,location:string):Array<doctor>=>{
    
    return doctors.filter((doctor)=>doctor.specialities.toLowerCase().includes(profession.toLowerCase())||doctor.description.includes(profession.toLowerCase()) && doctor.location.toLowerCase().includes(location.toLowerCase()))

}

const getDoctorsByProfession = (profession:string):Array<doctor>=>{
    
    return doctors.filter((doctor)=>doctor.specialities.toLowerCase().includes(profession.toLowerCase())||doctor.description.includes(profession.toLowerCase()))

}


const getDoctorsByProfessionByLocation = (location:string):Array<doctor>=>{
    
    return doctors.filter((doctor)=>doctor.location.toLowerCase().includes(location.toLowerCase())||doctor.description.includes(location.toLowerCase()))

}

function fixAppointment(appointment:Appointment){
    appointments.push(appointment);
}

function getAllAppointments():Array<Appointment>{
    return appointments;
}






export {getDoctorsByProfessionAndLocation,getDoctorsByProfession,getDoctorsByProfessionByLocation,fixAppointment,getAllAppointments};