import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import PokemonFetcher from "../4/App";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/PokemonFetcher">
                <PokemonFetcher/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews