
export default function  QuestionLine (props){
    const handleOptionSelect = (event) => {
        const selectedOption = event.target.value;
        props.onChoiceSelect(props.Question, selectedOption);
      };
    return(
        <>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">{props.Question}</label>
            <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/4">
                    <label for="color-red" class="block text-gray-700 font-medium mb-2">
                        <input type="radio"  onChange={handleOptionSelect}  value={props.choice1}  name={props.Question} class="mr-2"/>{props.choice1}
                    </label>
                </div>
                <div class="px-2 w-1/4">
                    <label for="color-blue" class="block text-gray-700 font-medium mb-2">
                        <input type="radio"  onChange={handleOptionSelect} value={props.choice2} name={props.Question}  class="mr-2"/>{props.choice2}
                    </label>
                </div>
                <div class="px-2 w-1/4">
                    <label for="color-green" class="block text-gray-700 font-medium mb-2">
                        <input type="radio"  onChange={handleOptionSelect} value={props.choice3}  name={props.Question}  class="mr-2"/>{props.choice3}
                    </label>
                </div>
                <div class="px-2 w-1/4">
                    <label for="color-green" class="block text-gray-700 font-medium mb-2">
                        <input type="radio"  onChange={handleOptionSelect} value={props.choice4}  name={props.Question} class="mr-2"/>{props.choice4}
                    </label>
                </div>
            </div>
        </div>
        </>
    )
}