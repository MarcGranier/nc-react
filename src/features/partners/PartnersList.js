import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { selectAllPartners } from './partnersSlice';
import  Partner  from './Partner'
import Error from '../../components/Error';
import Loading from '../../components/Loading'
// Test to github

const PartnersList = () => {
    const partners = useSelector(selectAllPartners);
    
    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) => state.partners.errMsg);
    
    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg = {errMsg} />        
    ) : (
        <Col className='mt-4'>
              {partners.map((partner) => {
                        return (
                            <div 
                                className='d-flex mb-5' 
                                key={partner.id}
                            >
                                <Partner partner={partner}/>
                            </div>
                        );
                    })}
        </Col>
    );
}
export default PartnersList;