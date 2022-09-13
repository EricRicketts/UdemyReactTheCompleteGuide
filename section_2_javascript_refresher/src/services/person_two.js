import HumanTwo from './human_two';

class PersonTwo extends HumanTwo {
    gender = 'male';
    name = 'Fred'
    get = () => this.name;
    set = (name) => this.name = name;
}

export default PersonTwo;