#creating list of students
students_list = [
    {"name":"Shivangi","age":30,"city":"Ujjain"},
    {"name":"Sakshi","age":24,"city":"Indore"},
    {"name":"Raksha","age":22,"city":"Dewas"},
    {"name":"Abhishek","age":21,"city":"Jabalpur"},
    {"name":"Mihir","age":29,"city":"Gwalior"},
    {"name":"Manas","age":31,"city":"Vidisha"},
    {"name":"Deepali","age":20,"city":"Nagpur"},
    {"name":"Anita","age":22,"city":"Bhopal"}
]
#for filtering students under 25
student_under_25=[]
student_above_25=[]
for i in students_list:
    if(i["age"]<=25):
        student_under_25.append(i)
    else:
        student_above_25.append(i)
#sorting students according to city:
sort_city=[]
for i in student_above_25:
    sort_city.append(i["city"])
sort_city.sort()
final_student_list=[]
for i in sort_city:
    for j in student_above_25:
        if i==j["city"]:
            final_student_list.append(j)
print(f"Final_list of Students above age 25 sorted according to city is:-{final_student_list}")
