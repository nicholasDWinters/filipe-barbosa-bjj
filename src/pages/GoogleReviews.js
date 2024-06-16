import './GoogleReviews.css';
import review1 from '../images/review1.png';
import review2 from '../images/review2.png';
import review3 from '../images/review3.png';
import review4 from '../images/review4.png';
import review5 from '../images/review5.png';
import formPic from '../images/newGymClass.jpg'
import Form from '../Form';


const GoogleReview = () => {
    const rev1 = `${review1}`;
    const rev2 = `${review2}`;
    const rev3 = `${review3}`;
    const rev4 = `${review4}`;
    const rev5 = `${review5}`;
    const form = `${formPic}`;
    
    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Google Reviews</h1>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-10 paragraph-col'>
                    <h5 className='paragraph text-muted about'>Check out what students have said about the gym!</h5>
                    </div>
              

            </div>
            
            <div className='row align-items-center justify-content-center mt-5'>
        
                    <img className='Review-img img-fluid' src={rev5} alt='google review'></img>
           
            </div>
            <div className='row align-items-center justify-content-center mt-5'>
        
                    <img className='Review-img img-fluid' src={rev2} alt='google review'></img>
           
            </div>
            <div className='row align-items-center justify-content-center mt-5'>
        
                    <img className='Review-img img-fluid' src={rev4} alt='google review'></img>
           
            </div>
            <div className='row align-items-center justify-content-center mt-5'>
        
                    <img className='Review-img img-fluid' src={rev1} alt='google review'></img>
           
            </div>
            <div className='row align-items-center justify-content-center mt-5'>
        
                    <img className='Review-img img-fluid' src={rev3} alt='google review'></img>
           
            </div>
            
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-10 paragraph-col'>
                    <h5 className='paragraph text-muted about'>See even more reviews on <a class="link" href="https://g.co/kgs/A76W1NX">Google</a></h5>
                    </div>
              

            </div>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                    <h1 className='mb-2'>INTERESTED?</h1>
                    <h5 className='paragraph about text-muted'>Interested in trying jiu jitsu? Want to schedule a free trial class? Reach out to us to learn more.</h5>
                    <Form formType={'trial class'}/>
                </div>
                <div className='col-lg-1'></div>

                <div className='col-lg-5 mt-3 mt-lg-0'>
                    <img className='Home-img img-fluid' src={form} alt='class'></img>
                </div>

            </div>

        </div>
    )
}

export default GoogleReview;