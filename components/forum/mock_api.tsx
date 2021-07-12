var data =  [{user:"phani@123",msg:"phani@123"},
{user:"sarav@123",msg:"sarav@123"},
{user:"sprinklr@123",msg:"sprinklr@123"},
{user:"aneree@123",msg:"aneree@123"},
{user:"dhruv@123",msg:"dhruv@123"}];

 export async function getForumData(){
    //  console.log(data);
    return data; 
}

export function AddData(user_data){
    data =[...data,user_data];
}