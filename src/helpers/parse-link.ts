import queryString from 'query-string';


interface ParsedLink {
  next: string | undefined;
  previous: string | undefined;
  last: string | undefined;
  first: string | undefined;
}

/**
 * Function parse link header for js object
 */
export function parseLink(linkHeader: string): ParsedLink {
  if (linkHeader === '') {
    return {
      next: undefined,
      previous: undefined,
      last: undefined,
      first: undefined
    }
  }

  const links = linkHeader.split(',').map(link => link.split(';'));
  let nav: any = {};
  
  links.forEach((link) => {
    const key = link[1].substr(link[1].indexOf('=')+1).replaceAll('"', '');
    const value = queryString.parse(link[0].substr(link[0].indexOf('?')).replaceAll('>', ''));

    nav = {...nav, ...JSON.parse(`{"${key}":"${value.page}"}`)}
  })

  return {
    next: nav.next,
    previous: nav.prev,
    last: nav.last,
    first: nav.first
  }
}
