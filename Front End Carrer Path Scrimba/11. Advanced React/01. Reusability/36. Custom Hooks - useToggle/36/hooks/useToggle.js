/**
 * Create the beginnings of the useToggle custom hook!
 * 
 * 1. Create a function called useToggle(). Skip the
 *    parameters for now. (We'll come back to that)
 * 2. Bring the useState and toggle function from
 *    our Toggle component into this hook
 * 3. TBA
 */

export default function useToggle() {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
}