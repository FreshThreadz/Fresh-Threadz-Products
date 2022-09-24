# Products API

### Table of Contents
1. [General Info](#general-info)
2. [Performance](#performance)
3. [Optimization](#optimization)
4. [Tech Stack](#tech)
5. [Team](#team)

<a name="general-info"></a>
### General Info 
<!--![Draft](https://img.shields.io/badge/Draft-5a29e4.svg?style=flat&logoColor=white) <br />-->
Implemented improved Products API to meet 1k request per second requirement.

Postgres 

<a name="performance"></a>
### Perfomance

Back End Architecture utilizes AWS to deploy a load balancer, 2 servers, and a Postgres database. Cache is not implemented. All load tests performed via Loader.io. Servers are located in N. Virginia to minimize latency with Loader.io.

<details>
  <summary>Typical Load Performance</summary>
  
  #### Typical 400 RPS Load
  
  Perfomance at typical load of 400 clients per second. 4ms latency and 0% error 
  
  ![400 RPS Performance](https://user-images.githubusercontent.com/75116559/192119715-f658ea2d-838b-439d-8e19-639e7e5788d6.png)

</details>

<details>
  <summary>Stress Load Performance</summary>
  
  #### Stress 1000 RPS Load
  
  Perfomance at stress load of 1000 clients per second. 14ms latency and 0.2% error
  
  Latency increased by 350% 
  
  ![1k RPS Performance](https://user-images.githubusercontent.com/75116559/192119991-a2b3764f-bbfd-4a97-8dec-a4bcd9addecc.png)
  
</details>

<details><summary>Overload Stress Performance</summary>
  
  #### Overload 1200 RPS Load
  
  Perfomance at stress load of 1200 clients per second. 27ms latency and 0.4% error
  
  ![1.2k RPS Performance](https://user-images.githubusercontent.com/75116559/192120767-a4fe4aaf-f308-42ab-ad26-00789b5f08c4.png)

</details>

<a name="optimization"></a>
### Optimization

<details><summary>Cache Implementation</summary>
  
  #### Cache Performance
  
  Cache is implemented using Nginx - Latency at 1000 RPS has decreased by more than 50% to an average of 6.66ms and error has decreased to 0%.
  
  ![Screen Shot 2022-09-24 at 3 45 03 PM](https://user-images.githubusercontent.com/75116559/192121167-079031c1-e3a5-41b2-89f4-2174bf1f98c0.png)
  
  With caching, servers are able to handle 4x required load (4000 RPS) with relative stability.
  
  ![Screen Shot 2022-09-24 at 3 56 31 PM](https://user-images.githubusercontent.com/75116559/192121389-8563fae9-37f9-4d64-861b-2585bcefa873.png)

</details>

<a name="tech"></a>
### Tech Stack
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) 
![node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) 
![postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) 
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white) 
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Axios](https://img.shields.io/badge/axios-5a29e4.svg?style=for-the-badge&logo=axios&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) <br />


<a name="team"></a>
Product Detail: Ivan Luk\
[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luki1/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/theivanluk)
