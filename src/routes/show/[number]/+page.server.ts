import { error } from "@sveltejs/kit";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export const load = async ({ params }) => {
	const showsPath = path.resolve("shows");
	const files = fs.readdirSync(showsPath);

	// 简单查找：文件名以 number 开头
	const fileName = files.find((f) =>
		f.startsWith(params.number.padStart(3, "0")),
	);

	if (!fileName) throw error(404, "Episode not found");

	const fileContent = fs.readFileSync(path.join(showsPath, fileName), "utf-8");
	const { data, content } = matter(fileContent);
	const html = await marked(content);

	return {
		show: data,
		html,
	};
};
