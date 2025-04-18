import { Title } from "@solidjs/meta";
import { Stack } from "../../styled-system/jsx";
import { Text } from "~/components/ui/text";

export default function Home() {
	return (
		<main>
			<Title>Hello World</Title>
			<Stack gap="4">
				<Text>This is a test</Text>
				<p>This is a test</p>
			</Stack>
		</main>
	);
}
