
export default function  QuestionLine (props){
    return(
        <>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">{props.Question}</label>
            <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/4">
                    <label for="color-red" class="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="d" name="color" value="d" class="mr-2"/>{props.choice1}
                    </label>
                </div>
                <div class="px-2 w-1/4">
                    <label for="color-blue" class="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="ddd" name="color" value="ddd" class="mr-2"/>{props.choice2}
                    </label>
                </div>
                <div class="px-2 w-1/4">
                    <label for="color-green" class="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="Grdddeen" name="color" value="Grdddeen" class="mr-2"/>{props.choice3}
                    </label>
                </div>
                <div class="px-2 w-1/4">
                    <label for="color-green" class="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="Grdddeen" name="color" value="Grdddeen" class="mr-2"/>{props.choice4}
                    </label>
                </div>
            </div>
        </div>
        </>
    )
}