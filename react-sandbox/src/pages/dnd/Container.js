import { Dustbin } from './Dustbin';
import { Box } from './Box';
function Container() {
    return (
        <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Dustbin allowedDropEffect="any" />
                <Dustbin allowedDropEffect="copy" />
                <Dustbin allowedDropEffect="move" />
            </div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Box name="Glass" />
                <Box name="Banana" />
                <Box name="Paper" />
            </div>
        </div>)
}
export default Container;
