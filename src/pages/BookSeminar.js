import seminar1 from '../images/womensSelfDefenseSeminar.jpg';
import seminar2 from '../images/bookSeminar2.jpg';
import seminar3 from '../images/bookSeminar3.jpg';
import seminar4 from '../images/bookSeminar4.jpg';
import seminar5 from '../images/bookSeminar5.jpg';
import Form from '../Form';


const BookSeminar = () => {
    const sem1 = `${seminar1}`;
    const sem2 = `${seminar2}`;
    const sem3 = `${seminar3}`;
    const sem4 = `${seminar4}`;
    const sem5 = `${seminar5}`;
    
    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Book a Seminar</h1>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                    <h1 className=''>CORPORATE SELF-DEFENSE SEMINARS</h1>
                    <h5 className='paragraph about'>The Essential Role of Self-Defense Training in Corporate Wellness Programs</h5>
                    <h5 className='paragraph text-muted about'>Forward-thinking companies recognize the immense value of their employees and are increasingly investing in their well-being. By incorporating wellness programs and providing opportunities for further training and education, these companies are not only supporting their workforce but also securing their own future success.</h5>
                    </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5 mt-3 mt-lg-0'>

                    <img className='Classes-img img-fluid' src={sem4} alt='seminar'></img>

                </div>
                <div className='col-lg-1'></div>

            </div>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                    <h1 className='mb-2'>INTERESTED?</h1>
                    <h5 className='paragraph about text-muted'>Interested in scheduling a seminar with Filipe for your office or gym? Reach out to learn more.</h5>
                    <Form formType={'seminar'}/>
                </div>
                <div className='col-lg-1'></div>

                <div className='col-lg-5 mt-3 mt-lg-0'>
                    <img className='Home-img img-fluid' src={sem5} alt='seminar'></img>
                </div>

            </div>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                    <h1 className=''>SELF-DEFENSE SEMINARS</h1>
                    <h5 className='paragraph about'>Empowerment through training</h5>
                    <h5 className='paragraph text-muted about'>Looking for a FUN and EFFECTIVE way to STAY SAFE? Limited on time? Part of a group that could benefit from self-defense training? Your search ends here!</h5>
                    <h5 className='paragraph text-muted about'>Filipe Barbosa's self-defense seminars are crafted to meet your specific needs. We work with a diverse range of groups, including friends, employers of all sizes, wellness programs, security firms, churches, schools, and more, providing tailored solutions to help you achieve your unique goals.</h5>
                    </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5 mt-3 mt-lg-0'>

                    <img className='Classes-img img-fluid' src={sem2} alt='seminar'></img>

                </div>
                <div className='col-lg-1'></div>

            </div>
            
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                   
                    <img className='Home-img img-fluid' src={sem1} alt='seminar'></img>
                </div>
                <div className='col-lg-1'></div>

                <div className='col-lg-5 mt-3 mt-lg-0'>
                    <img className='Home-img img-fluid' src={sem3} alt='seminar'></img>
                </div>

            </div>
           

        </div>
    )
}

export default BookSeminar;