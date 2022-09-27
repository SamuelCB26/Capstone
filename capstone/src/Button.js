import Button from 'react-bootstrap/Button';

const style1 = {alignItems: "center"};


function btn() {
    function refreshPage() {
        window.location.reload(false)
    }
return (
    <div className="mb-2" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    <Button onClick={refreshPage} id="get-colour" variant="primary" size="lg" style={{...style1, boxShadow: '1px 4px 4px rgb(33, 33, 33', marginBottom: '30px'}}>
        Generate Palette!
    </Button>
    </div>
);
}

export default btn;