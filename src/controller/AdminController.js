const UserBalance = require('../models/UserBalance')
const AccountAdministration = require('../models/UserAccountAdministration')
const { v4: uuid } = require("uuid");
const ApiError = require('../middleware/error/ApiError');


module.exports = {


    async create(req, res, next, userId) {



        try {
            const { category_name, percentage } = req.body;

            const categoryExist = await AccountAdministration.findOne({ where: { userId: userId, category_name: category_name } })




            const balanceExist = await UserBalance.findOne({ where: { userId: userId } })

            if (!balanceExist) {
                next(ApiError.notFound(`Balance does not exists`))
                return;
            }

            const amount = balanceExist.balance_remain * percentage

            category_vars = {
                id: uuid(),
                category_name: category_name,
                balance: amount,
                percentage: percentage,
                userId: userId
            }



            if (!categoryExist) {
                const category = await AccountAdministration.create(category_vars);
                res.status(201).json(category)
                return;
            }

            await AccountAdministration.update(
                { balance: categoryExist.balance+amount }, {
                where: {
                    category_name: category_name,
                    userId: userId
                }
            })

            res.status(200).json({ success: "registered" })



        } catch (error) {
            next(error)
        }


    }
}