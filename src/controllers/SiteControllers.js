// const Course = require('../model/M_product');
import Course from '../model/M_product';


class SiteController {
    index(req, res){
        Course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'ERROR!!!' });
            }
        })
    }
}


export default SiteController;