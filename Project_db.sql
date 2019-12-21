FarmFutures




CREATE DATABASE Project_db;

GRANT ALL PRIVILEGES ON Project_db .* TO 'dmc'@'localhost';

CREATE TABLE Admin(Admin_id INTEGER PRIMARY KEY AUTO_INCREMENT ,User_name VARCHAR(20),Email varchar(20),Password varchar(300));

CREATE TABLE ClientRegDetails
(User_id INTEGER AUTO_INCREMENT ,
User_Name VARCHAR(25),
User_Eamil VARCHAR(30),
User_Phone VARCHAR(15),
User_Gender VARCHAR(10),
User_Country VARCHAR(20),
User_State VARCHAR(20),
User_Dist VARCHAR(20),
User_City VARCHAR(20),
User_Pin INTEGER,
User_Password VARCHAR(300),
CONSTRAINT PK_User_id 
PRIMARY KEY (User_id) );


CREATE TABLE CropType
(CropType_id INTEGER AUTO_INCREMENT,
CropType_Name VARCHAR(100),
CONSTRAINT PK_CropType_id 
PRIMARY KEY (CropType_id) );


CREATE TABLE Servises 
(Service_id INTEGER AUTO_INCREMENT ,
Services_Name VARCHAR(100),
CONSTRAINT PK_Servises_id 
PRIMARY KEY (Service_id));




CREATE TABLE TradingType
(TradingType_id INTEGER AUTO_INCREMENT, 
Trader_Name VARCHAR(100) ,
CONSTRAINT PK_TradingType_id
PRIMARY KEY (TradingType_id ));



CREATE TABLE CropDetails
(Crop_id INTEGER PRIMARY KEY AUTO_INCREMENT ,
CropType_id INTEGER,
Crop_Sesaon VARCHAR(20),
Crop_Category VARCHAR(20),
Crop_Type VARCHAR(20),
Crop_Name VARCHAR(20),
Crop_Info VARCHAR(1000),
Crop_Price INTEGER,
Crop_Img VARCHAR(300),
CONSTRAINT FK_CropType_id  
FOREIGN KEY (CropType_id) 
REFERENCES CropType(CropType_id) 
ON UPDATE CASCADE ON DELETE CASCADE);




CREATE TABLE FertiliserDetails
(Fertiliser_id INTEGER PRIMARY KEY AUTO_INCREMENT, 
Crop_id INTEGER,
Fertiliser_Category varchar(100), 
Fertiliser_Brand varchar(100),
Fertiliser_Oncrop varchar(200),
Fertiliser_Info VARCHAR(2000),
Fertiliser_Price INTEGER ,
Fertiliser_Img VARCHAR(300),
CONSTRAINT FK_Crop_id FOREIGN KEY(Crop_id)
REFERENCES CropDetails(Crop_id) 
ON UPDATE CASCADE ON DELETE CASCADE );

CREATE TABLE SeedDetails
(Seed_id INTEGER PRIMARY KEY AUTO_INCREMENT,
Crop_id INTEGER,
Seed_Name VARCHAR(100),
Seed_Price INTEGER,
 CONSTRAINT FK_Crops_id 
 FOREIGN KEY (Crop_id)
 REFERENCES CropDetails(Crop_id) 
ON UPDATE CASCADE ON DELETE CASCADE );



CREATE TABLE Serviceprovider
(ServicePr_id INTEGER PRIMARY KEY AUTO_INCREMENT,
 Service_id INTEGER,
 PerDayPrice INTEGER,
 Instruction VARCHAR(1000),
 CONSTRAINT FK_Service_id 
 FOREIGN KEY (Service_id) 
 REFERENCES Servises(Service_id)
 ON UPDATE CASCADE ON DELETE CASCADE );


CREATE TABLE TraderReg
(Tr_id INTEGER AUTO_INCREMENT,
Tr_name VARCHAR(100),
Tr_Address VARCHAR(100),
Tr_Email VARCHAR(20),
Tr_Phone  VARCHAR(15),
Tr_Catagory VARCHAR(20),
Tr_password VARCHAR(200),
CONSTRAINT PK_Tr_id 
PRIMARY KEY (Tr_id));


CREATE TABLE Trading
(Trading_id INTEGER PRIMARY KEY AUTO_INCREMENT,
Tr_id INTEGER,
TradingType_id INTEGER,
Seed_id INTEGER,
Fertiliser_id INTEGER,
Crop_id INTEGER,
Service_id INTEGER,
User_id INTEGER,
Trading_price INTEGER,


CONSTRAINT FK_TR_id 
FOREIGN KEY (Tr_id)
REFERENCES TraderReg(Tr_id) ,

CONSTRAINT FK_TradingType_id 
 FOREIGN KEY (TradingType_id)
 REFERENCES TradingType(TradingType_id),
 
 CONSTRAINT FK_Seed_id 
FOREIGN KEY (Seed_id)
REFERENCES SeedDetails(Seed_id) ,

 CONSTRAINT FK_Fert_id 
FOREIGN KEY (Fertiliser_id)
REFERENCES FertiliserDetails(Fertiliser_id) ,


CONSTRAINT FK_CropsD_id 
FOREIGN KEY (Crop_id)
REFERENCES CropDetails(Crop_id) ,

CONSTRAINT FK_Services_id 
FOREIGN KEY (Service_id)
REFERENCES Servises(Service_id) ,

CONSTRAINT FK_User_id 
FOREIGN KEY (User_id)
REFERENCES ClientRegDetails(User_id)

ON UPDATE CASCADE ON DELETE CASCADE 

   );


   --------------------------------------------------
