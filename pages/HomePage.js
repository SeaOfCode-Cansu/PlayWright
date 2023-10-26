export class HomePage{
constructor(page){
    this.page = page; 
}
async clickSpecialHotMenu(){
    await this.page.click("'Special Hot");
}
}