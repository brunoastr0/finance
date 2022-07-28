const Income = require('../../models/UserIncome');
const Outcome = require('../../models/UserOutcome');


const UserBalance = require("../../models/UserBalance");
const { QueryTypes } = require('sequelize')
const sequelize = require('../../database');


const update_balance_trigger_income = () => {

Income.addHook('afterCreate',async (income)=>{
    
    // income.keys().map( async (item)=>{
        const outcome_amount = income.outcome_amount
        const balance = await UserBalance.findOne({id:1})
       
        balance.balance_amount = balance.balance_amount + outcome_amount
        balance.save()
    
        

    // })

    });
    Outcome.addHook('afterCreate',async (outcome)=>{

        // income.keys().map( async (item)=>{
            const outcome_amount = outcome.outcome_amount
            const balance = await UserBalance.findOne({id:1})
            
            balance.balance_amount = balance.balance_amount - outcome_amount
            balance.save()
        
        // })
    
        })




}






// CREATE TRIGGER IF NOT EXISTS add_income_to_balance_trigger
// 	AFTER INSERT 
//     ON user_income
//     BEGIN 
//     	UPDATE user_balance SET balance_amount = balance_amount + NEW.outcome_amount, 
//         created_at=DATETIME('NOW'),
//         updated_at = DATETIME('NOW');
        
//     END;
    
    

// DROP TRIGGER IF EXISTS add_outcome_to_balance_trigger;

// CREATE TRIGGER IF NOT EXISTS add_outcome_to_balance_trigger
// 	AFTER INSERT 
//     ON user_outcome
//     BEGIN 
//     	UPDATE user_balance SET balance_amount = balance_amount - NEW.outcome_amount, 
//         created_at=DATETIME('NOW'),
//         updated_at = DATETIME('NOW')
//         WHERE balance_amount > 0;
        
        
//     END;


// DROP TRIGGER IF EXISTS balance_trigger;

// select * from sqlite_master where type = 'trigger';





