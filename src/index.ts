/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.json`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = 'https://throbbing-field-36f6.tellsenales.workers.dev/';
		let data;
		try {
			data = await fetch(url).then((res) => {
				if (!res.ok) {
					throw new Error(`${res.status} ${res.statusText}`);
				}

				console.log(request.url, request.method);
				return res.text();
			});
			console.log(data);
		} catch (error) {
			console.log(error);
			return new Response(error.message, { status: 500 });
		}
		return new Response(data);
	},
} satisfies ExportedHandler<Env>;
