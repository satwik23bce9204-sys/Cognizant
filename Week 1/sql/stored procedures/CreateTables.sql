-- Create Accounts Table

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    AccountType VARCHAR2(20),
    Balance NUMBER
);

-- Insert Sample Data

INSERT INTO Accounts VALUES (101,'Savings',10000);
INSERT INTO Accounts VALUES (102,'Savings',5000);
INSERT INTO Accounts VALUES (103,'Current',8000);

COMMIT;

-- Create Employees Table

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER
);

-- Insert Sample Data

INSERT INTO Employees VALUES (1,'John','IT',50000);
INSERT INTO Employees VALUES (2,'Alice','HR',45000);
INSERT INTO Employees VALUES (3,'David','IT',60000);

COMMIT;
