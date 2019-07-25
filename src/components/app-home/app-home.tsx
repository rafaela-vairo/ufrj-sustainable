import { Component, h } from '@stencil/core'

@Component({
	tag: 'app-home',
	styleUrl: 'app-home.css',
	shadow: true,
})
export class AppHome {
	render() {
		return (
			<mnv-base>
				<mnv-navbar />
				<mnv-grid container>
					<mnv-grid item xl='6' md='12'>
						<mnv-paragraph capitular>
							Aolores veniam quasi nulla repellendus et aspernatur deserunt
							eveniet maiores. Dolorem sint voluptates soluta asperiores
							reiciendis quam est doloremque quaerat.
							<mnv-anchor href='https://www.reddit.com'>
								Officiis quas qui
							</mnv-anchor>
							consequatur
							<mnv-mark>
								aliquid quidem dolore. Libero omnis vel et nulla. Quos
								repudiandae voluptatem qui voluptates.
								<mnv-tooltip label='Lorem ipsum 😀 😬 😂 😅 😆 doloribus odit repudiandae'>
									<mnv-strong>Qui nihil veritatis excepturi ipsum.</mnv-strong>
								</mnv-tooltip>
								Id qui sit a omnis ut cumque qui id fugit. Illum aut magni
								consequatur fugiat atque et debitis.{' '}
							</mnv-mark>
							Quos doloribus odit repudiandae omnis necessitatibus earum culpa
							dolor. Molestiae corrupti iure reprehenderit dolores. Rem deserunt
							abat dolorum repellat et exercitationem aut voluptatem. Ullam
							animi in libero porro dolorum qui totam alias. Dolores consequatur
							dolores dolores.
							<i class='material-icons'>face</i>
						</mnv-paragraph>
					</mnv-grid>
					<mnv-grid item md='6'>
						<mnv-paragraph bodytwo>
							Dolores veniam quasi nulla repellendus et aspernatur deserunt
							eveniet maiores. Dolorem sint voluptates soluta asperiores
							reiciendis quam est doloremque quaerat.
							<mnv-strong>
								Officiis quas qui consequatur aliquid consequatur sed aliquid
								quidemdolore. Libero omnis vel et nulla.{' '}
							</mnv-strong>
							Quos repudiandae voluptatem qui voluptates. Qui nihil veritatis
							excepturi ipsum. Id qui sit a omnis ut cumque qui id fugit. Illum
							aut magni consequatur fugiat atque et
							<mnv-divider /> debitis. Quos doloribus odit repudiandae omnis
							necessitatibus earum culpa dolor. Molestiae corrupti iure
							reprehenderit dolores. Rem deserunt ab at dolorum repellat et
							exercitationem aut voluptatem. Ullam animi in libero porro dolorum
							qui totam alias. Dolores consequatur dolores dolores.
						</mnv-paragraph>
					</mnv-grid>
					<mnv-grid item xl='12'>
						<div>
							<mnv-button contained>Contained</mnv-button>
							<mnv-button contained disabled>
								Contained
							</mnv-button>
							<mnv-button outlined>Outlined</mnv-button>
							<mnv-button outlined disabled>
								Outlined
							</mnv-button>
							<mnv-button>Texto</mnv-button>
							<mnv-button disabled>Texto</mnv-button>
							<mnv-title level='h1' overline='Overline'>
								H1 Serif Title
							</mnv-title>
							<mnv-title level='h1 sans'>H1 Sans-serif Title</mnv-title>
							<mnv-title level='h2'>H2 Title</mnv-title>
							<mnv-title level='h3'>H3 Title</mnv-title>
							<mnv-title level='h4'>H4 Title</mnv-title>
							<mnv-title level='h5'>H5 Title</mnv-title>
							<mnv-title level='h6'>H6 Title</mnv-title>
							<mnv-figure-caption
								src='https://ufrj.br/sites/all/themes/ufrj/assets/images/rsociais/destaque-home.jpg'
								alt='Alt da Imagem'
								boldspotlight
								italictext
							>
								<span slot='spotlight'>Figure 1: </span>
								<span slot='text'>Descrição da Figura</span>
							</mnv-figure-caption>
						</div>
					</mnv-grid>
				</mnv-grid>
			</mnv-base>
		)
	}
}
