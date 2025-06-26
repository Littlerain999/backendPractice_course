console.clear()

async function checkJob(man_name, contact, qualification) {
    const name = man_name;
    const condition = await admin(qualification)
    console.log(condition)    
}